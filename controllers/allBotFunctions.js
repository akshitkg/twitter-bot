const {TwitterApi} =require('twitter-api-v2');  // TwitterApi accessed from twitter-api-v2
const { search } = require('../routes/handler');

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

async function SearchTweet(searchQuery){
    const {search_input, search_option}=searchQuery
    console.log(`Search initiated with ${search_input} and ${search_option}`)
    if(search_option=='byUsername'){
        try{

            const userIdResponse= await rwClient.v2.userByUsername(search_input)
            const userId=userIdResponse.data.id;
            const userTweetsPaginator= await rwClient.v2.userTimeline(userId, {exclude: 'replies'})
            // const userTweets=userTweetsPaginator.data;
            console.log(userId)
            // console.log(userTweets)
            while(!userTweetsPaginator.done){
                const nextPaginatorResponse=await userTweetsPaginator.fetchNext()
                console.log(nextPaginatorResponse.data)
            }
        }catch(e){
            console.log(e)
        }
        

    }else{
        try{
            const tweetsWithHashtagPaginator=await rwClient.v2.search(`#${search_input}`)
            while (!tweetsWithHashtagPaginator.done){
                const tweetsWithHashtag=await tweetsWithHashtagPaginator.fetchNext();
                console.log(tweetsWithHashtag.data)
            }
        }catch(e){
            console.log(e)
        }
    }

}

module.exports={Tweet, SearchTweet}