const router=require('express').Router();   // Declare express router

const {TwitterApi} =require('twitter-api-v2');  // TwitterApi accessed from twitter-api-v2

const twitterClient=new TwitterApi({
    appKey: process.env.CONSUMER_APP_KEY,
    appSecret: process.env.CONSUMER_APP_SECRET,
    accessToken: process.env.ACCESS_OAUTH_TOKEN,
    accessSecret: process.env.ACCESS_OAUTH_SECRET
})

const rwClient=twitterClient.readWrite;

// router.get('/',require())
router.get('/',(req,res)=>{
    res.render('home.hbs')
})

router.post('/tweet',(req,res)=>{
    const tweetText=req.body.tweet;
    console.log(tweetText)
})

module.exports=router;