import nodeHtmlToImage from 'node-html-to-image';
import { Card } from './cards';
import { noisyBackground } from './base64image';
import { base64font } from './base64font';
import path from 'path';
import fs from 'fs';

const backgroundImages = [
  path.join(__dirname, '/assets/background.jpg'),
  path.join(__dirname, '/assets/background2.jpg'),
  path.join(__dirname, '/assets/background3.jpg'),
  path.join(__dirname, '/assets/background4.jpg'),
];

const style = (rotation: string) => `
            <style>
              @font-face {
                font-family: "Sequel Sans Roman Body";
                src: url(${base64font}) format('woff2');
              }
              body {
                width: 1024px;
                height: 512px;
              }
              #image-background {
                position: absolute;
                top: 8px;
                left: 8px;
              }
              #card-overlay {
                position: absolute;
                top: 80px;
                left: 112px;
                background-color: white;
                border-radius: 32px;
                width: 768px;
                height: 384px;
                background-image: url(${noisyBackground});
                z-index: 2;
                transform: rotate(${rotation});
                opacity: 0.15;
              }
              #card {
                z-index: 1;
                position: absolute;
                top: 80px;
                left: 112px;
                background-color: white;
                border-radius: 32px;
                width: 768px;
                height: 384px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: "Sequel Sans Roman Body";
                transform: rotate(${rotation});
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
              }
              #card p{
                padding: 16px 64px 16px 64px;
                font-size: 36px;
                text-align: left;
                z-index: 3
              }
            </style>
`;

export const generateImage = (
  card: Card,
): Promise<string | Buffer | (string | Buffer)[]> => {
  const rotation = `${Math.random() * (3 - -3) + -3}deg`; // Reassign to recalculate degree for current card.

  return nodeHtmlToImage({
    html: `
        <html>
            ${style(rotation)}
            <body>
                <img id="image-background" src="{{imageSource}}"/>
                <div id="card-overlay"></div>
                <div id="card"><p>${card.quote}</p></div>
            </body>
        </html>`,
    content: {
      imageSource: generateBase64Image(),
    },
    puppeteerArgs: { args: ['--no-sandbox'] },
  });
};

const generateBase64Image = () => {
  const imageFile =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  const binaryFile = fs.readFileSync(imageFile);
  const base64Image = new Buffer(binaryFile).toString('base64');
  return `data:image/png;base64, ${base64Image}`;
};
