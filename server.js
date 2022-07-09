// Load all environment variables before-hand
require("dotenv").config();

// Temp import of function
// const { Retweet } = require("./controllers/allBotFunctions");
// const rwClient=require('./controllers/allBotFunctions')

// All imports
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { interval } = require("./controllers/allBotFunctions");

const app = express(); // Get express functionalities

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// DB connection
mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected!");
  }
);

const db=mongoose.connection;

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

// setInterval(interval, 1000, 'Akshit');

// clearInterval(interval);

// Make server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server up on Port ${PORT}`);
});
