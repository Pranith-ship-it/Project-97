// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6mxV0Wk_A9RlTAsOUlGIQBeb9nX7hYiU",
    authDomain: "kwitter-2-2b171.firebaseapp.com",
    databaseURL: "https://kwitter-2-2b171-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-2b171",
    storageBucket: "kwitter-2-2b171.appspot.com",
    messagingSenderId: "943197405008",
    appId: "1:943197405008:web:16a9a0df0d72becbbd3655",
    measurementId: "G-HLK6N4FFTP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class = 'room_name' id="+Room_names+"omclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
  }
  
  function log_out()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
