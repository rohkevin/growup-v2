// Updater

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDF3Yw4L_5odWGXNNJUDYUCPqPSYf7OgcI",
    authDomain: "growupv2.firebaseapp.com",
    projectId: "growupv2"
  });
  
var db = firebase.firestore();

// Update each document
db.collection("posts").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc){
    doc.ref.update({
      // author: "Most Palone",
      // authorImage: "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
    })
  })
})


