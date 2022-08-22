//index.js is gonna be our server
//require express
const express = require('express')
//to create our express server, we need to call the app with the express() function
const app = express()
const posts = require('./posts')

//to return our posts api object in our browser, we create a new route
app.get('/posts', function(req, res) {
    res.json(posts);
});

//creates a new route, first to the index of our website
//the 2nd parameters are the request and response objects
app.get('/', function(req, res) {
    res.send("Api is running.");
});

//this function will actually run the server
//we need to pass in a port
//app.listen(port: process.env.PORT || 3000, callback: () => console.log("Server is running."))
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});
