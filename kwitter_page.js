const firebaseConfig = {
      apiKey: "AIzaSyA3kzHwi1PgREd9UKYwXsl6oZaMYDRyaUs",
      authDomain: "kwitter-app-9172a.firebaseapp.com",
      databaseURL: "https://kwitter-app-9172a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9172a",
      storageBucket: "kwitter-app-9172a.appspot.com",
      messagingSenderId: "541316853168",
      appId: "1:541316853168:web:10d7fb42f9125ce5a87a75"
    };
    firebase.initializeApp(config);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
