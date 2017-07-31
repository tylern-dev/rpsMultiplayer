$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyD9TIL6K4ItkxKE-sCxTANvHV53u7hBL6I",
    authDomain: "rps-multiplayer-f1843.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-f1843.firebaseio.com",
    projectId: "rps-multiplayer-f1843",
    storageBucket: "rps-multiplayer-f1843.appspot.com",
    messagingSenderId: "730008919513"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var user = $('#username-input');
  var userValue; 



  //gets username input and will store it to the DB
  
  function usernameRetrieval(){
    $('#user-submit').on('click', function(event){
      event.preventDefault();
      userValue  = user[0].value
      console.log(userValue)
      $('.player-info').addClass('hide');
      $('.main').removeClass('hidden');
    })
  }
 

  function main(){
    usernameRetrieval();
 }

 main()

})


