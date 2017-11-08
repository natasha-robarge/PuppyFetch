const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  savedPets: [String] //save pets by id
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
