//Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Configure the Express application
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

app.listen(PORT, function(){
    console.log("Friend Finder app is listening on PORT: " + PORT);
});