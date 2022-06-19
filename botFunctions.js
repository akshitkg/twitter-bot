

// const rwClient=twitterClient.readWrite;

async function Tweet() {
  await rwClient.v2.tweet("Tweeted by bot!");
  console.log("Tweeted successfully!");
}

module.exports=Tweet;