// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  orderBy,
  limit,
  // onSnapshot,
  query,
  getDocs,
} from 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

// Saves a new message to Cloud Firestore.
async function saveScore(board, name, time) {
  // Add a new message entry to the Firebase database.
  try {
    await addDoc(collection(db, `${board}`), {
      name: name,
      time: time,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error writing time to Firebase Database', error);
  }
}

async function getBoard(board) {
  // Create the query to load boards, order them by the time and max limit 20
  const q = query(collection(db, board), orderBy('time', 'asc'), limit(20));

  const querySnapshot = await getDocs(q).then((snapshot) => {
    const data = snapshot.docs.map((doc, index) => ({
      number: index + 1,
      time: doc.data().time,
      name: doc.data().name,
    }));
    return data;
  });

  return querySnapshot;
}

export { firebaseApp, saveScore, getBoard };
