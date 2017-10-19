//Dependencies
const db = require('../models/user');
const petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');

function createUser(req, res) {
  const newUser = db.User({
    email: req.body.email,
    savedPets: []
  })
}
