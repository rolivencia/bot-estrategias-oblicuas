import Twit from 'twit';
import { getCardText } from './cards';

const Twitter = new Twit(require('./config'));

const tweetCard = () => {
  const grab = getCardText();

  Twitter.post(
    'statuses/update',
    { status: grab },
    function (error, data, response) {
      if (!error) {
        console.log(data);
        console.log(
          'Success! Check your bot, it should have tweeted something.',
        );
      } else {
        console.log('There was an error with a tweet posting:', error);
      }
    },
  );
};

tweetCard();
setInterval(tweetCard, 1000 * 60 * 60 * 6);
