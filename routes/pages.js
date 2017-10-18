//Dependencies
const petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');
const $ = require('jquery');


//functions

//console.log(petfinder, 'petfinder')

function getHomePage(req, res) {
  res.render('home');
}

function getDogs(req, res) {
  petfinder.findPet(78721, {}, function(err, animals) {
    var result = [];
    animals.forEach(function(animal) {
      for(var prop in animal) {
        if(animal[prop] === 'Dog') {
          result.push({ 'animal': animal })
        }
      }
    })
    //res.send(result);

    console.log(result[0].animal.name)

    for(var i = 0; i < result.length; i++) {
      $('.appendDiv').append(`<h3> ${dogsArray[i].animal.name} </h3>`)
    }
  });
}

// function getDogNames(getDogs) {
//   var dogsArray = getDogs;
//   for(var i = 0; i < dogsArray.length; i++) {
//     $('.appendDiv').append(`<h3> ${dogsArray[i].animal.name} </h3>`)
//   }
// }
// getDogNames();

module.exports = {
  getHomePage: getHomePage,
  getDogs: getDogs,
}
