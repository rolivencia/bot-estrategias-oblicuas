// Interfaces
import { TwitterApiTokens } from 'twitter-api-v2';

// Environment
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env` });

const intervalEnv = process.env.post_interval_in_hours;
export const config: AppConfig = {
  environment: {
    appKey: process.env.consumer_key ?? '',
    appSecret: process.env.consumer_secret ?? '',
    accessToken: process.env.access_token,
    accessSecret: process.env.access_token_secret,
  },
  intervalEnv: process.env.post_interval_in_hours,
  postIntervalInHours: intervalEnv ? parseInt(intervalEnv) : 24,
};

export interface AppConfig {
  environment: TwitterApiTokens;
  intervalEnv: string | undefined;
  postIntervalInHours: number;
}
