//get json from server.js using ajax

$(document).ready(function(){
  console.log('Document ready');

  $('.searchButton').on('click', handleSearch);
  $('.photos').on('click', handleImageClick);
})


function handleSearch(evt) {
  evt.preventDefault();
  console.log('Clicked');
  // get the text input field
  // store the search value
  let zip = document.querySelector('#location');
  // console.log('Zipp ', zip.value)

   zip = parseInt(zip.value);
  //  console.log('Zip num ', zip)

let age = document.querySelector('.age');
let gender = document.querySelector('.gender');
let breed = document.querySelector('.breed').toLowerCase();

// make an AJAX call with the search value
  function petData(data) {
    $.ajax({
      method: 'GET',
      url: '/search/' + zip + '/' || + age + '/' || + gender + '/' || + breed + '/',
      data: 'json',
      dataType: '',
      success: onSuccess,
      error: onError
    })
  }
     // handle the response
};

function onSuccess(json) {
  console.log('Success! ');
}

function onError() {
  var errorRes = console.log('Error! ');
}
