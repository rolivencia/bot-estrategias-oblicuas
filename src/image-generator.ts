import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { Card } from './cards';
import { noisyBackground } from './base64image';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const backgroundImages = [
  path.join(__dirname, '/assets/background.jpg'),
  path.join(__dirname, '/assets/background2.jpg'),
  path.join(__dirname, '/assets/background3.jpg'),
  path.join(__dirname, '/assets/background4.jpg'),
];

const fontData = fs.readFileSync(
  path.join(__dirname, '/assets/sequel-sans-roman-body.otf'),
);

const styles = (rotation: string) => `
  #root {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }
  #background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #card-overlay {
    position: absolute;
    top: 80px;
    left: 112px;
    display: flex;
    width: 768px;
    height: 384px;
    border-radius: 32px;
    background-color: white;
    background-image: url(${noisyBackground});
    opacity: 0.15;
    transform: rotate(${rotation});
  }
  #card {
    position: absolute;
    top: 80px;
    left: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 768px;
    height: 384px;
    border-radius: 32px;
    background-color: white;
    transform: rotate(${rotation});
    box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25),
      0px 12px 13px rgba(0, 0, 0, 0.17), 0px 4px 6px rgba(0, 0, 0, 0.12);
  }
  #card p {
    padding: 16px 64px;
    font-size: 36px;
    text-align: left;
  }
`;

const markup = (card: Card, backgroundImage: string, rotation: string) => html`
  <div id="root">
    <style>
      ${styles(rotation)}
    </style>
    <img id="background" src="${backgroundImage}" />
    <div id="card-overlay"></div>
    <div id="card"><p>${card.quote}</p></div>
  </div>
`;

export const generateImage = async (card: Card): Promise<Buffer> => {
  const width = 1024;
  const height = 512;
  const fontFamily = 'Sequel Sans Roman Body';
  const rotation = `${Math.random() * 6 - 3}deg`;
  const backgroundImage = generateBase64Image();

  const element = markup(
    card,
    backgroundImage,
    rotation,
  ) as unknown as Parameters<typeof satori>[0];

  const svg = await satori(element, {
    width,
    height,
    fonts: [{ name: fontFamily, data: fontData, weight: 400, style: 'normal' }],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width } });
  return Buffer.from(resvg.render().asPng());
};

const generateBase64Image = () => {
  const imageFile =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  const base64Image = fs.readFileSync(imageFile).toString('base64');
  return `data:image/jpeg;base64,${base64Image}`;
};
