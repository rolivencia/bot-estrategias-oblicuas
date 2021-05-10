import Twit from 'twit';
import { Card, getCard } from './cards';
import { generateImage } from './image-generator';
import { IncomingMessage } from 'http';

const Twitter = new Twit(require('./config'));

const tweetCard = async () => {
  const grabbedCard: Card = getCard();
  const bufferedImage:
    | string
    | Buffer
    | (string | Buffer)[] = await generateImage(getCard());

  Twitter.post(
    'media/upload',
    {
      media_data: bufferedImage.toString('base64'),
    },
    // FIXME - RO 10/05/21: added "any" to data to be able to grab media_id_string, since the property isn't recognized by Twit.
    function (
      err: Error,
      data: { media_id_string: string } | any,
      response: IncomingMessage,
    ) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      const mediaIdStr = data.media_id_string;
      const altText = grabbedCard.quote;
      const meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };

      Twitter.post(
        'media/metadata/create',
        meta_params,
        function (err, data, response) {
          if (!err) {
            // now we can reference the media and post a tweet (media will attach to the tweet)
            const params = {
              status: '',
              media_ids: [mediaIdStr],
            };

            Twitter.post(
              'statuses/update',
              params,
              function (err, data, response) {
                console.log(data);
              },
            );
          }
        },
      );
    },
  );
};

tweetCard();
setInterval(tweetCard, 1000 * 60 * 60 * 3);
