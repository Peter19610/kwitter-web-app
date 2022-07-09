var firebaseConfig = {
    apiKey: "AIzaSyCiuDGuNXZMONWnIakooxwWuvAEwjZr6d4",
    authDomain: "class-test-75bfe.firebaseapp.com",
    databaseURL: "https://class-test-75bfe-default-rtdb.firebaseio.com",
    projectId: "class-test-75bfe",
    storageBucket: "class-test-75bfe.appspot.com",
    messagingSenderId: "32219996896",
    appId: "1:32219996896:web:93d10e2938a62e94592685"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
         document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
