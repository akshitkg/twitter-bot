const { default: TweetsClient } = require('twitter-api-client/dist/clients/TweetsClient');

const {Tweet, SearchTweet}=require('../controllers/allBotFunctions')

const router=require('express').Router();   // Declare express router

// const {TwitterApi} =require('twitter-api-v2');  // TwitterApi accessed from twitter-api-v2

// const twitterClient=new TwitterApi({
//     appKey: process.env.CONSUMER_APP_KEY,
//     appSecret: process.env.CONSUMER_APP_SECRET,
//     accessToken: process.env.ACCESS_OAUTH_TOKEN,
//     accessSecret: process.env.ACCESS_OAUTH_SECRET
// })

// const rwClient=twitterClient.readWrite;

// router.get('/',require())
router.get('/',(req,res)=>{
    res.render('home.hbs')
})

router.post('/tweet',(req,res)=>{
    const tweetText=req.body.tweet_text;
    // console.log(req.body.tweet_text);
    Tweet(tweetText);
    res.redirect('/');
})

router.post('/search-tweet',(req,res)=>{
    const searchQuery=req.body;
    // console.log(searchInput)
    SearchTweet(searchQuery)
    res.redirect('/')
})

module.exports=router;