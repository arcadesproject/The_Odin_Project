// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeZ70amZ0zpW1yv_e7nxc-PvglI-cUZWY',
  authDomain: 'wheres-wally-odin.firebaseapp.com',
  projectId: 'wheres-wally-odin',
  storageBucket: 'wheres-wally-odin.appspot.com',
  messagingSenderId: '943521398554',
  appId: '1:943521398554:web:6d71b34447b8ccc85b36a3',
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
