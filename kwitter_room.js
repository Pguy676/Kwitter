// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyChYB78YEboFo98aU1-dMjzCLdhk4z7Z9M",
    authDomain: "kwitter-8e022.firebaseapp.com",
    databaseURL: "https://kwitter-8e022-default-rtdb.firebaseio.com",
    projectId: "kwitter-8e022",
    storageBucket: "kwitter-8e022.appspot.com",
    messagingSenderId: "399415700278",
    appId: "1:399415700278:web:60b8c18ecc854803516197",
    measurementId: "G-FRQQKFT4TP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.setItem("user_name");
  room_name = localStorage.setItem("room_name");

  function send(){
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0  
   });
   document.getElementById("msg").value = ""; 
  }
  

   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

   function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name" 
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
  }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
      }
      //End code
      });});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = ("kwitter.html");
 }