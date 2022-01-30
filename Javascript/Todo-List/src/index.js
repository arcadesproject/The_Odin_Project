import { initializeApp } from 'firebase/app';
import page from './modules/page';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWd2A6kOYLUgnqRYK7ojPYGb7jRlCGfgo',

  authDomain: 'to-do-list-odin.firebaseapp.com',

  projectId: 'to-do-list-odin',

  storageBucket: 'to-do-list-odin.appspot.com',

  messagingSenderId: '247236958610',

  appId: '1:247236958610:web:45e3677284e13cf001c94b',
};

const app = initializeApp(firebaseConfig);

(function component() {
  page();
  // app();
})();
