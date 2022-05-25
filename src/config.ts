import * as dotenv from 'dotenv';
dotenv.config({ path: `.env` });

const environment = {
  appKey: process.env.consumer_key,
  appSecret: process.env.consumer_secret,
  accessToken: process.env.access_token,
  accessSecret: process.env.access_token_secret,
};

const postIntervalInHours: number = parseInt(process.env.post_interval_in_hours);

module.exports = { environment, postIntervalInHours };
