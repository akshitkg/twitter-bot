require("dotenv").config();

const { TwitterApi } = require("twitter-api-v2");

const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_SECRET,
});

const rwClient = twitterClient.readWrite;

rwClient.v2.tweet("Tweeted by a bot!");
