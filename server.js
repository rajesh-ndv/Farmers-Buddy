var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var connecDB=require('./DB/connection');
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
// passport config
app.use(require("express-session")({
  secret: "This is Man Utd!",
  resave: false,
  saveUninitialized: false
}));
connecDB();
const Users=require('./routes/users');
app.use('/users', Users)
const Weather=require('./routes/weather');
app.use('/weather',Weather);
app.listen(port,()=>console.log("Server started!"));