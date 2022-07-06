// Load all environment variables before-hand
require("dotenv").config();

// All imports
const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const app=express(); // Get express functionalities

// Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


// Route Handlers
app.use('/', require('./routes/handler'))



// Some code


// Make server
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server up on Port ${PORT}`)
})