import firebase from "firebase/app";
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjiBtF5Iw40vhUQSYGSLc3iCt6rifJoiw",
    authDomain: "pollapp-1487a.firebaseapp.com",
    databaseURL: "https://pollapp-1487a.firebaseio.com",
    projectId: "pollapp-1487a",
    storageBucket: "pollapp-1487a.appspot.com",
    messagingSenderId: "292758658599",
    appId: "1:292758658599:web:5332cdbaca6b50b7457802",
    measurementId: "G-H32E3SKWL5"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);