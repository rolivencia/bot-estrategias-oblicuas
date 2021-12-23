import {generateImage} from "./image-generator";
import {getCard} from "./cards";

const tweetCard2 = async (tweet?: Twit.Twitter.Status) => {
  const bufferedImage: string | Buffer | (string | Buffer)[] =
    await generateImage(getCard());

  const params: {
    media_data?: string;
    status?: string;
    in_reply_to_status_id?: string;
  } = { media_data: bufferedImage.toString('base64') };

  Twitter.post(
    'media/upload',
    params,
    // FIXME - RO 10/05/21: added "any" to data to be able to grab media_id_string, since the property isn't recognized by Twit.
    function (
      err: Error,
      data: { media_id_string: string } | any,
      response: IncomingMessage,
    ) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      const mediaIdStr: string = data.media_id_string;
      const meta_params = { media_id: mediaIdStr };

      Twitter.post('media/metadata/create', meta_params, function (err) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          const params: {
            media_ids: string[];
            status?: string;
            in_reply_to_status_id?: string;
          } = {
            status: '',
            media_ids: [mediaIdStr],
          };

          if (tweet) {
            // User handle of who sent the mention
            const name = tweet.user.screen_name;
            const nameId = tweet.id_str;

            // Reply to sender
            const reply = 'Esta es tu estrategia oblicua, @' + name;
            params.status = reply;
            params.in_reply_to_status_id = nameId;
          }

          Twitter.post('statuses/update', params, (err, data) =>
            console.log(data),
          );
        }
      });
    },
  );
};