//get json from server.js using ajax

$(document).ready(function(){
  console.log('Document ready');
})
function jsonData() {
  $.ajax({
    method: 'GET',
    url: '/search/' + zip,
    success: onSuccess,
    error: onError
  })
}

//

// var zip = document.querySelector('input #location');
// console.log(zip)
function onSuccess() {
  console.log('Success!');
}

function onError() {
  console.log('Error!');
}


function searchClick() {
  $('.searchButton').on('click', function(evt) {
    evt.preventDefault();

    var zipCode = document.querySelector('#location');
    console.log('Zipp ', zipCode.value)

    console.log(typeof zipCode.value)

    // get the text input field
    // let zip = evt.querySelector('#location').value;
             console.log(`I'm clicked!, `, zip)
  });
// searchClick();

    // store the search value
    // make an AJAX call with the search value
    // handle the response
}
