require("dotenv").config();

const { TwitterApi } = require("twitter-api-v2");

// const { Tweet } = require("./botFunctions");

const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_SECRET,
});

const rwClient = twitterClient.readWrite;

// Create Tweet
async function Tweet() {
  rwClient.v2.tweet("Tweeted by a bot!");
  console.log("Tweeted Successfully!");
}

// Find particular hashtag tweet
async function findTweet() {
  const result = await rwClient.v2.get("tweets/search/recent", {
    query: "#coolfool",
    max_results: 10,
  });
  console.log(result);
}

// const me=await rwClient.v2.me();
// console.log(me);

async function loggedUser(){
  const me=await rwClient.v2.me();
  console.log(me);
}

async function retweet(){
  const retweet=await rwClient.v2.retweet('1423981154990911488', '1538275798893076481');
  console.log(retweet);
}

// loggedUser();
retweet();


// findTweet();

module.exports = twitterClient;
