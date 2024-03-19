// import dotenv 
require('dotenv').config()

// 2) import express
const express = require('express')
require('./DB/connection')

// 3) import cors
const cors = require('cors');
const router = require('./Routes/router');

// 4) create server
const sPServer = express();

// 5) use cors
sPServer.use(cors())

// 6) use middleware to convert json to js object
sPServer.use(express.json())
// apply router to sPServer
sPServer.use(router)

// 7) define port
const PORT = 4000;

// 8) run the server
sPServer.listen(PORT, ()=>{
console.log("Server is up and Running in port: ",PORT)
})