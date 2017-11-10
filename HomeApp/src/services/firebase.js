import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBrA-54vahvL7oGFpcEdw9HxuTy1V1jUvo",
    authDomain: "myapp-6f38b.firebaseapp.com",
    databaseURL: "https://myapp-6f38b.firebaseio.com",
    storageBucket: "myapp-6f38b.appspot.com",
};



export default firebaseRef = firebase.initializeApp(config);