//get json from server.js using ajax

let zip = 78721;

$(document).ready(function(){
  console.log('Document ready');
  jsonData();
})

function jsonData(zip) {
  $.ajax({
    method: 'GET',
    url: '/search/', // + zip,
    success: onSuccess,
    error: onError
  })
}

//

// var zip = document.querySelector('input #location');
// console.log(zip)
function onSuccess(data) {
  console.log('Success! ');
}

function onError(data) {
  console.log('Error!');
}

function searchClick() {
  $('.searchButton').on('click', function(evt) {
    evt.preventDefault();

    var zip = document.querySelector('#location');
    console.log('Zipp ', zip.value)

     //zip = parseInt(zip.value);

    var dataCall = jsonData(zip)
      console.log(animals, ' says hi')

  });

    // get the text input field
    // store the search value
    // make an AJAX call with the search value
    // handle the response
}
