import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBK6Ysofj4HrFDCABfX6pa_j1L109Ne0Z8",
    authDomain: "hitmeup-e7a8d.firebaseapp.com",
    databaseURL: "https://hitmeup-e7a8d.firebaseio.com",
    projectId: "hitmeup-e7a8d",
    storageBucket: "hitmeup-e7a8d.appspot.com",
    messagingSenderId: "598373194035",
    appId: "1:598373194035:web:269a3d5d92b80294d70646",
    measurementId: "G-6R9MRGL5KV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

//for google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;