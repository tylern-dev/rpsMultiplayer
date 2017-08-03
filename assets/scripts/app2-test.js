
(function(){
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
        id: '',
        name:'',
        wins:0,
        losses:0,
        choice:'',
    } 
    
    var playerRef = database.ref('players')

    
    function usernameRetrieval(){
        $('#user-submit').on('click', function(event){
            event.preventDefault();
            userObject.name = $('#username-input').val().trim();
            // setUserStatus(userObject)
            $('.player-info').addClass('hide');
            $('.main').removeClass('hidden');
        })
    }
     
    





}());//end of iffy