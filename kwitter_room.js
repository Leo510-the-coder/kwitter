var firebaseConfig = {
  apiKey: "AIzaSyDUwpcfDI-mOL-36-xS9WeLVajjSq0UWKs",
  authDomain: "kwitter-f9e80.firebaseapp.com",
  databaseURL: "https://kwitter-f9e80-default-rtdb.firebaseio.com",
  projectId: "kwitter-f9e80",
  storageBucket: "kwitter-f9e80.appspot.com",
  messagingSenderId: "228571758496",
  appId: "1:228571758496:web:ab55a8a3001be5ec7b6ec5",
  measurementId: "G-JK1ZHX56XZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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
    window.location = "kwitter.html";
}
