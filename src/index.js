import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBL5kPJ0jM7HGIlk4E-iV3OCBgA6iKekFg",
    authDomain: "debatethee.firebaseapp.com",
    databaseURL: "https://debatethee.firebaseio.com",
    projectId: "debatethee",
    storageBucket: "debatethee.appspot.com",
    messagingSenderId: "35166371028"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
};
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
