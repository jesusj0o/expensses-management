require("dotenv").config();
const express = require('express'); 
const cors = require('cors'); 
const dbConnect = require('./config/mongo'); 

const app = express(); 

if(!process.env.DB_URI) throw new Error("DB_URI is not defined (.env file)"); 

app.use(cors()); 
app.use(express.json()); 

app.use("/api", require("./routes"));

dbConnect();

module.exports = app;    