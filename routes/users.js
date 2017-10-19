//Dependencies
const User = require('../models/user');
const petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');

function createUser(req, res) {
  const newUser = User({
    email: req.body.email,
    savedPets: req.body.savedPets
  })

  newUser.save(function(err, data) {
    if(err) {
      console.log(`Error ${err}`);
    } else {
      console.log(data)
      res.send(data);
    }
  });
}

function getOneUser(req, res) {
  User.findOne( { _id: req.params.id }, function(err, userData) {

   console.log(req, ' req')
    var savedPetsArray = photo;
    console.log(savedPetsArray)
    res.render(userData);
  })
}

module.exports = {
  createUser: createUser,
  getOneUser: getOneUser
}
