import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBcB_0c80ioDGJ8qcQeHSgkHHIEsrZU1_s",
	authDomain: "usersmanage-f62aa.firebaseapp.com",
	projectId: "usersmanage-f62aa",
	storageBucket: "usersmanage-f62aa.appspot.com",
	messagingSenderId: "526294424889",
	appId: "1:526294424889:web:59365f64330358932d1ce8",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
