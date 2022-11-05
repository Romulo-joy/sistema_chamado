import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDJZgmsq3-IJ7_uK4ASalznR-YRPZfK2O8",
  authDomain: "chamado-281dd.firebaseapp.com",
  projectId: "chamado-281dd",
  storageBucket: "chamado-281dd.appspot.com",
  messagingSenderId: "575829124856",
  appId: "1:575829124856:web:eb0f887aeecf76fba03d0d",
  measurementId: "G-GCYKRMBNQF"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;