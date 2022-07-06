// Load all environment variables before-hand
require("dotenv").config();

// Temp import of function
// const { Retweet } = require("./controllers/allBotFunctions");
// const rwClient=require('./controllers/allBotFunctions')

// All imports
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express(); // Get express functionalities

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Route Handlers
app.use("/", require("./routes/handler"));

// Some code
// async function Retweet(retweet_hashtag){
//     console.log('Retweet function initiated')
//     const searchResult=await rwClient.v2.search(`#code`, {'max_results':10})
//     const newestTweetId=searchResult.meta.newest_id
//     const myUserId=rwClient.v2.me();
//     rwClient.v2.retweet(myUserId, newestTweetId)
// }

// setInterval(()=>{Retweet('#host')}, 3600*1000)

// Make server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up on Port ${PORT}`);
});
