import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAQ2qDkhvwap0uhM-cmwIGtYZCnFfET_5c",
    authDomain: "diaryy-a5ab2.firebaseapp.com",
    databaseURL: "https://diaryy-a5ab2.firebaseio.com",
    projectId: "diaryy-a5ab2",
    storageBucket: "diaryy-a5ab2.appspot.com",
    messagingSenderId: "905597636976",
    appId: "1:905597636976:web:ae5d82770ff32d4dccffb5",
    measurementId: "G-WNK05NY65L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const database = firebase.database().ref('/notes');