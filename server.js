// Load all environment variables before-hand
require("dotenv").config();

// All imports
const express=require('express')


const app=express(); // Get express functionalities

// Middlewares


// Some code


// Make server
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server up on Port ${PORT}`)
})