import nodeHtmlToImage from 'node-html-to-image';
import { Card } from './cards';
import { noisyBackground } from './base64image';
import { base64font } from './base64font';

const backgroundImages = [
  'https://i.ibb.co/Njzpk0z/background.jpg',
  'https://i1.wp.com/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46786465-0f32-4e4d-893f-41d9d6c05c02/d7x9bhx-e9212674-8bde-40e6-8148-3185db4462c3.jpg/v1/fill/w_1024,h_512,q_70,strp/textura_de_madera_2400x1200_by_estudioestuma_d7x9bhx-fullview.jpg',
  'https://cutewallpaper.org/21/wooden-background-hd/Wood-Backgrounds-25-Free-HD-Wood-Backgrounds-and-Textures.jpg',
  'https://two7tiles.com/wp-content/uploads/2018/01/wood-walnut1000x3000x10_RGB-1024x512.jpg',
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
      imageSource:
        backgroundImages[Math.floor(Math.random() * backgroundImages.length)],
    },
  });
};
