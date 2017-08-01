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
  var userObject = {
    name:'',
    wins:0,
    losses:0,
    choice:'',
  }


var userListRef = database.ref("users_online");
var myUserRef = userListRef.push()

//this is setting the status from the user object to the db
function setUserStatus(object){
  myUserRef.set(object)
}

//this is looking to see if client connected or disconnected
database.ref(".info/connected").on("value", function(snapshot){
  if(snapshot.val()){
    myUserRef.onDisconnect().remove();
    // setUserStatus("online");
  }
})

function rps(){
  userObject.choice = 'rock'
  setUserStatus(userObject)
}



  // gets username input and will store it to the DB
  function usernameRetrieval(){
    $('#user-submit').on('click', function(event){
      event.preventDefault();
      userObject.name = $('#username-input').val().trim();
      setUserStatus(userObject)
      $('.player-info').addClass('hide');
      $('.main').removeClass('hidden');
    })
  }  

 

  function main(){
    usernameRetrieval();
    rps();
 }

 main()

})


