//Dependencies

var petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');
const ejs = require('ejs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONN);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//ejs setup
app.set('view engine', 'ejs');
app.use(express.static("public"));

//app routes
const homeRoute = require('./routes/pages');
const userRoute = require('./routes/users');

app.get('/', homeRoute.getHomePage);
//app.get('/search', homeRoute.getSearchPage);

app.get('/signup', homeRoute.getSignUpPage);

app.post('/signup', userRoute.createUser);
app.get('/signup/:id', userRoute.getOneUser);


//Get dogs by zip code and grab cart page
app.get('/cart', homeRoute.getCartPage);
app.get('/search/:zip', homeRoute.getDogs);



//app start

app.listen(process.env.PORT || 3000, function(){
  console.log(`Listening on Port 3000`);
})
