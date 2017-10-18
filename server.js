//Dependencies

var petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');
const ejs = require('ejs');
const express = require('express');
const app = express();

//ejs setup
app.set('view engine', 'ejs');
app.use(express.static("public"));

//app routes
const homeRoute = require('./routes/pages');
//app.get('/', homeRoute.getHomePage);
app.get('/', homeRoute.getDogs);


//app start

app.listen(3000, function(){
  console.log(`Listening on Port 3000`);
})
