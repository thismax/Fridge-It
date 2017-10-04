import firebase from 'firebase';
import FB from '../../../firebase.json';

// Config file from Firebase project console. Hidden values found in firebase.json.
var config = {
    apiKey: FB.apiKey,
    authDomain: FB.authDomain,
    databaseURL: FB.databaseURL,
    projectId: FB.projectId,
    storageBucket: FB.storageBucket,
    messagingSenderId: "614537900777"
  };
  
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;