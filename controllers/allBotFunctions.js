const {TwitterApi} =require('twitter-api-v2');  // TwitterApi accessed from twitter-api-v2

const twitterClient=new TwitterApi({
    appKey: process.env.CONSUMER_APP_KEY,
    appSecret: process.env.CONSUMER_APP_SECRET,
    accessToken: process.env.ACCESS_OAUTH_TOKEN,
    accessSecret: process.env.ACCESS_OAUTH_SECRET
})

const rwClient=twitterClient.readWrite;

async function Tweet(tweet_text){
    rwClient.v2.tweet(tweet_text)
    console.log('Tweeted Successfully!')
}

module.exports={Tweet}