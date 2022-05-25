import * as dotenv from 'dotenv';
dotenv.config({ path: `.env` });

const environment = {
  appKey: process.env.consumer_key,
  appSecret: process.env.consumer_secret,
  accessToken: process.env.access_token,
  accessSecret: process.env.access_token_secret,
};

const intervalEnv: string = process.env.post_interval_in_hours;

const postIntervalInHours: number = intervalEnv ? parseInt(intervalEnv) : 24;

module.exports = { environment, postIntervalInHours };
