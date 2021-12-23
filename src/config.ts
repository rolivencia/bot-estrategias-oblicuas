import * as dotenv from 'dotenv';
dotenv.config({ path: `.env` });

const environment = {
  appKey: process.env.consumer_key,
  appSecret: process.env.consumer_secret,
  accessToken: process.env.access_token,
  accessSecret: process.env.access_token_secret,
};

module.exports = environment;
