import * as dotenv from 'dotenv';
dotenv.config({ path: `.env` });

const environment = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
};

module.exports = environment;