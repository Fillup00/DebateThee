import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBL5kPJ0jM7HGIlk4E-iV3OCBgA6iKekFg",
    authDomain: "debatethee.firebaseapp.com",
    databaseURL: "https://debatethee.firebaseio.com",
    projectId: "debatethee",
    storageBucket: "debatethee.appspot.com",
    messagingSenderId: "35166371028"
};

const devConfig = {
    apiKey: "AIzaSyBL5kPJ0jM7HGIlk4E-iV3OCBgA6iKekFg",
    authDomain: "debatethee.firebaseapp.com",
    databaseURL: "https://debatethee.firebaseio.com",
    projectId: "debatethee",
    storageBucket: "debatethee.appspot.com",
    messagingSenderId: "35166371028"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};