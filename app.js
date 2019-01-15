var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});
app.get("/bye", function(req, res){
    res.send("Goodbye...");
});
app.get("/dog", function(req, res){
    res.send("MEOWwwww");
});
app.get("/r/:subredditName", function(req, res) {
   res.send("WELCOME TO THE " + req.params.subredditName.toUpperCase() + " SUBREDDIT!"); 
});
app.get("*", function(req, res){
    res.send("404");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});