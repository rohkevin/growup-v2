// Updater

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
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


