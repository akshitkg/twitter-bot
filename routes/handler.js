const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");
const { Tweet } = require("../botFunctions");

const twitterClient = new TwitterApi({
  appKey: process.env.CONSUMER_APP_KEY,
  appSecret: process.env.CONSUMER_APP_SECRET,
  accessToken: process.env.ACCESS_OAUTH_TOKEN,
  accessSecret: process.env.ACCESS_OAUTH_SECRET,
});

const rwClient = twitterClient.readWrite;

router.get("/", (req, res) => {
  res.render("home.html");
});
router.post("/post-tweet", (req, res) => {
//   const tweet = req.body.tweet;
  //   rwClient.v2.tweet(tweet);
  console.log("Tweeted Successfully!");
  console.log(req.body);
  //   Tweet(tweet);
});

module.exports = router;
