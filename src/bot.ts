import 'regenerator-runtime/runtime';
import TwitterApi, { ETwitterStreamEvent, TweetV1 } from 'twitter-api-v2';
import { generateImage } from './image-generator';
import { getCard } from './cards';

const client = new TwitterApi(require('./config'));
let stream;

const setupStream = async () => {
  stream = await client.v1.filterStream({ track: '@EOblicuasBot' });
  stream.on(ETwitterStreamEvent.Data, tweetCard);
};

const uploadMedia = async (): Promise<string[]> => {
  const bufferedImage: string | Buffer | (string | Buffer)[] =
    await generateImage(getCard());
  return await Promise.all([
    client.v1.uploadMedia(bufferedImage as Buffer, { type: 'png' }),
  ]);
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
    await client.v1.tweet('', {
      media_ids: mediaIds,
    });
  }
};

void tweetCard();
void setupStream();
setInterval(tweetCard, 1000 * 60 * 60 * 24);
