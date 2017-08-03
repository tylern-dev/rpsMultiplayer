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

  var playerOneName = $('#name-1');
  var playerTwoName = $('#name-2');
  var rpsBuilder =  $('<button id = "rps-button">');
  


var userListRef = database.ref("users_online");
var myUserRef = userListRef.push()
var userKey = myUserRef.key;


userListRef.on('value', function(snapshot) {
  var players = snapshot.val();
  var playerKey = Object.keys(players);
  playerOneName.text(players[playerKey[0]].name);
  playerTwoName.text(players[playerKey[1]].name)
    
})

//this is looking to see if client connected or disconnected
database.ref(".info/connected").on("value", function(snapshot){
  if(snapshot.val()){
    myUserRef.onDisconnect().remove();
    
  }
})
userListRef.on('value', function(snapshot) {
  var players = snapshot.val();
  var playerKey = Object.keys(players);
  playerOneName.text(players[playerKey[0]].name);
  playerTwoName.text(players[playerKey[1]].name)
  if(playerKey.length>2){
    console.log('Please wait for game to finish')
  } else {
    console.log('ready to play')
  }
})

userListRef.on('child_changed',function(snapshot){
  console.log(myUserRef.onDisconnect())
  })

// function playerData(data){
//   var players = data.val();
//   var keys = Object.keys(players);
//   console.log(keys)
//   for (var i = 0; i < keys.length; i++){
//     var k = keys[i];
//     playerOneName.text(players[k].name);
//     playerTwoName.text(players[k].name);
    

//     // userObject.name = players[k].name;
//     // userObject.choice = players[k].choice;
//     // userObject.wins = players[k].wins;
//     // userObject.losses = players[k].losses;
//     // console.log(userObject.name)
//   }
// }



//this is setting the status from the user object to the db
function setUserStatus(object){
  myUserRef.set(object)
}





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


