//Dependencies
const petfinder = require('petfinder')('a839717f845b6ee822240f22a2b5a84c', '6debdbd0c30c89132579a1a722d970ac');



//functions

//console.log(petfinder, 'petfinder')

function getHomePage(req, res) {
  res.render('home');
}

function getSignUpPage(req, res) {
    res.render('signup');
}

function getCartPage(req, res) {
  res.render('cart');
}

function getDogs(req, res) {

  console.log('GET DOGS!');
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
    var photoArray = [];

    console.log(result[0].animal.contact.zip)

    for(var i = 0; i < result.length; i++) {
      for(var key in result[i].animal.media.photos) {
        //console.log('I am here, ', result[i].animal.media.photos[key].pnt)
        photoArray.push(result[i].animal.media.photos[key].pnt)
      }
    }
    //console.log(photoArray);
    console.log('RENDERING DOGS!');
    res.render('search', { animals: result, photos: photoArray });
  });
}


module.exports = {
  getHomePage: getHomePage,
  getDogs: getDogs,
  getSignUpPage: getSignUpPage,
  getCartPage: getCartPage
}
