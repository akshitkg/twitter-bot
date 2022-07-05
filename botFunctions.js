require("dotenv").config();

const { TwitterApi } = require("twitter-api-v2");

const tweetSchema = require("./models/tweetSchema");

// const db=mongoose.createConnection(process.env.DB_STRING);

const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_SECRET,
});

const rwClient = twitterClient.readWrite;

// Create Tweet
async function Tweet(tweet) {
  rwClient.v2.tweet(tweet);
  console.log("Tweeted Successfully!");
}

// Find particular hashtag tweet
async function findTweet() {
  const result = await rwClient.v2.get("tweets/search/recent", {
    query: "#coolfool",
  });
  const data = result.data;
  for (i = 0; i < data.length; i++) {
    const newTweet = new tweetSchema({
      _id: data[i].id,
      tweet_text: data[i].text,
    });
    const tweet = await newTweet.save();
    console.log(tweet);
    console.log(data[i]);
  }
  console.log("yea!");
}
// async function findTweet(since_id) {
//     const result = await rwClient.v2.get("tweets/search/recent", {
//       query: "#coolfool",
//       since_id: since_id

//     });
//     return result;
// }

module.exports = { Tweet, findTweet };
