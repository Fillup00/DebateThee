
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//DebateThee
const prodConfig = {
  apiKey: "AIzaSyBL5kPJ0jM7HGIlk4E-iV3OCBgA6iKekFg",
  authDomain: "debatethee.firebaseapp.com",
  databaseURL: "https://debatethee.firebaseio.com",
  projectId: "debatethee",
  storageBucket: "debatethee.appspot.com",
  messagingSenderId: "35166371028"
};

//DevDebateThee
const devConfig = {  
  apiKey: "AIzaSyDEUKYiLM3Sn7W3WSAmEAXwx08RCWpM3SI",
  authDomain: "devdebatethee.firebaseapp.com",
  databaseURL: "https://devdebatethee.firebaseio.com",
  projectId: "devdebatethee",
  storageBucket: "devdebatethee.appspot.com",
  messagingSenderId: "252041547941"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
