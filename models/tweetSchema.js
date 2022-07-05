const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    _id:{
        type: String,
    },
    tweet_text: {
        type: String,
    }
})

module.exports=mongoose.model('Tweet', tweetSchema);
