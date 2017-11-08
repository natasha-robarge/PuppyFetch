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

function getSearchPage(req, res) {
  res.render('search');
}

function getDogs(req, res) {
  console.log(req.params)

  var result = [];

  console.log('GET DOGS!');
  petfinder.findPet(req.params.zip, {}, function(err, animals) {
    //Get dog object
    animals.forEach(function(animal) {
      for(var prop in animal) {
        if(animal[prop] === 'Dog') {
          result.push({ 'animal': animal })
        }
      }
    })

    // console.log(result[0].animal.breeds)

    //Get breeds

  var breedArray = [];

  petfinder.findPet(req.params, {}, function(err, animals) {
    console.log(req.params.breed);
    for(var b = 0; b < result.length; b++) {
      for(var keys in result[b]) {
        // console.log('Here are breeds, ', result[b].animal.breeds);
        var breed = result[b].animal.breeds[0] + ', ' + result[b].animal.breeds[1];

        if (breed.length > 1) {
          // console.log(breed);
          breedArray.push(breed);
        } else {
          breedArray.push(result[b].animal.breeds);
        }
      }
    }
  })

    //Get photos

    var photoArray = [];

    for(var i = 0; i < result.length; i++) {
      for(var key in result[i].animal.media.photos) {
        //console.log('I am here, ', result[i].animal.media.photos[key].pnt)
        photoArray.push(result[i].animal.media.photos[key].pnt)
      }
    }
    //console.log(photoArray);
    //console.log('RENDERING DOGS!');
    res.render('search', { animals: result, photos: photoArray, breeds: breedArray });
  });
}

// function newLoginSession(req, res) {
//   User.authenticate(req.body.email, req.body.password, function(err, user) {
//     if (err) {
//       res.status(407).send(`Error processing login: ${err.message}`);
//     } else {
//       user.push(req.body.email, req.body.password);
//       res.json(user);
//     }
//   });
// }

module.exports = {
  getHomePage: getHomePage,
  getDogs: getDogs,
  getSignUpPage: getSignUpPage,
  getCartPage: getCartPage,
  getSearchPage: getSearchPage,
  // newLoginSession: newLoginSession
}
