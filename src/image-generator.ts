import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { Card } from './cards.js';
import { noisyBackground } from './base64image.js';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WIDTH = 1024;
const HEIGHT = 512;
const FONT_FAMILY = 'Sequel Sans Roman Body';

const backgroundImages = [
  path.join(__dirname, '/assets/background.jpg'),
  path.join(__dirname, '/assets/background2.jpg'),
  path.join(__dirname, '/assets/background3.jpg'),
  path.join(__dirname, '/assets/background4.jpg'),
];

const fontData = fs.readFileSync(
  path.join(__dirname, '/assets/sequel-sans-roman-body.otf'),
);

const markup = (card: Card, backgroundImage: string, rotation: string) => {
  const cardBox =
    'position: absolute; top: 80px; left: 112px; width: 768px; height: 384px; border-radius: 32px; background-color: white;';
  const root = `display: flex; position: relative; width: ${WIDTH}px; height: ${HEIGHT}px;`;
  const image = `position: absolute; top: 0; left: 0; width: ${WIDTH}px; height: ${HEIGHT}px;`;
  const overlay = `${cardBox} display: flex; background-image: url(${noisyBackground}); opacity: 0.15; transform: rotate(${rotation});`;
  const card3d = `${cardBox} display: flex; align-items: center; justify-content: center; transform: rotate(${rotation}); box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px 4px 6px rgba(0, 0, 0, 0.12);`;
  const quote = `display: flex; padding: 16px 64px; font-size: 36px; text-align: left; font-family: '${FONT_FAMILY}';`;

  return html`
    <div style="${root}">
      <img src="${backgroundImage}" style="${image}" />
      <div style="${overlay}"></div>
      <div style="${card3d}"><p style="${quote}">${card.quote}</p></div>
    </div>
  `;
};

export const generateImage = async (card: Card): Promise<Buffer> => {
  const rotation = `${Math.random() * 6 - 3}deg`;
  const backgroundImage = generateBase64Image();

  const element = markup(
    card,
    backgroundImage,
    rotation,
  ) as unknown as Parameters<typeof satori>[0];

  const svg = await satori(element, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: FONT_FAMILY, data: fontData, weight: 400, style: 'normal' },
    ],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
  return Buffer.from(resvg.render().asPng());
};

const generateBase64Image = () => {
  const imageFile =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  const base64Image = fs.readFileSync(imageFile).toString('base64');
  return `data:image/jpeg;base64,${base64Image}`;
};
