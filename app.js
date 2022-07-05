require("dotenv").config();

const express = require("express");
const cons = require("consolidate");
const path = require("path");
const app = express();

app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use("/", require("./routes/handler"));

const { TwitterApi } = require("twitter-api-v2");

// // const { Tweet } = require("./botFunctions");
const mongoose = require("mongoose");
const tweetSchema = require("./models/tweetSchema");

const botFunctions = require("./botFunctions");

const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_SECRET,
});

const rwClient = twitterClient.readWrite;

mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("DB connected!");
  }
);

const db = mongoose.connection;

// Create Tweet
async function Tweet() {
  rwClient.v2.tweet("Tweeted by a bot!");
  console.log("Tweeted Successfully!");
}

// Find particular hashtag tweet
// async function findTweet() {
//   const result = await rwClient.v2.get("tweets/search/recent", {
//     query: "#coolfool",
//     max_results: 10,
//   });
//   const data = result.data;
//   for (i = 0; i < data.length; i++) {
//     const tweet = await new tweetSchema({
//       _id: data[i].id,
//       tweet_text: data[i].text,
//     });
//     await connection.save(tweet);
//     console.log(tweet);
//     console.log(data[i]);
//   }
//   console.log("yea!");
// }

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

// const me=await rwClient.v2.me();
// console.log(me);

// async function loggedUser(){
//   const me=await rwClient.v2.me();
//   console.log(me);
// }

// async function retweet(){
//   const retweet=await rwClient.v2.retweet('1423981154990911488', '1538275798893076481');
//   console.log(retweet);
// }

async function main() {
  const see = await botFunctions.findTweet();
  console.log(see);
}
// main();

// setInterval(() => botFunctions.findTweet(), 5000);

// loggedUser();
// retweet();

// findTweet();
// Tweet();

// module.exports = twitterClient;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up on Port ${PORT}`);
});

module.exports=rwClient;
