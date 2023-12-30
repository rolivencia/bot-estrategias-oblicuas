import 'regenerator-runtime/runtime';
import TwitterApi, { TweetV1 } from 'twitter-api-v2';
import { generateImage } from './image-generator';
import { Card, getCard } from './cards';
import { config } from './config';

const client = new TwitterApi(config.environment);

const uploadMedia = async (): Promise<string[]> => {
  const card: Card = getCard();
  console.log(
    `Twitted strategy ${card.id}: ${card.quote} - ${new Date().toString()}`,
  );
  const bufferedImage: string | Buffer | (string | Buffer)[] =
    await generateImage(card);

  const mediaId = await client.v1.uploadMedia(bufferedImage as Buffer, {
    type: 'png',
  });
  await client.v1.createMediaMetadata(mediaId, {
    alt_text: { text: card.quote },
  });

  return await Promise.all([mediaId]);
};

// TODO: Add alt text for card images, for use by screen readers
const tweetCard = async (tweet?: TweetV1) => {
  const mediaIds: string[] = await uploadMedia();

  if (tweet) {
    const tweetId: string = tweet.id_str;
    const userHandle: string = tweet.user.screen_name;
    await client.v1.reply(
      'Esta es tu estrategia oblicua, @' + userHandle,
      tweetId,
      { media_ids: mediaIds },
    );
  } else {
    await client.v2.tweet('', {
      media: { media_ids: mediaIds },
    });
  }
};

const oneHourInMilliseconds = 1000 * 60 * 60;

void tweetCard();
setInterval(tweetCard, oneHourInMilliseconds * config.postIntervalInHours);
