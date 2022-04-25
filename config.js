import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAMG4_Rjz_Sc4gDCTJlDeHROWALmiXtLnU",
  authDomain: "team-voting-app-46acf.firebaseapp.com",
  projectId: "team-voting-app-46acf",
  storageBucket: "team-voting-app-46acf.appspot.com",
  messagingSenderId: "356620055435",
  appId: "1:356620055435:web:e7e20624e7d38f6fee758e"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();

