import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const production=false;
const firebaseConfig = {
  apiKey: "AIzaSyAdf6oy5hMBAn3CUHktIlApXgMbcWZtdAI",
  authDomain: "coderush-73c63.firebaseapp.com",
  projectId: "coderush-73c63",
  storageBucket: "coderush-73c63.appspot.com",
  messagingSenderId: "1016963231492",
  appId: "1:1016963231492:web:4544d75156d39764c3aa51"
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// const firebase = require('firebase/app').default
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// if (!firebase.app.length) {
//     firebase.initializeApp(firebaseConfig)
// }
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }
const auth = getAuth(app);
// const firestore = initializeFirestore(app, {
//   experimentalAutoDetectLongPolling: true
// })
const firestore = getFirestore(app);


export { auth, firestore, app };