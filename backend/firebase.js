const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAIIoyXIo2KRuj_MRM4Fbpp5_5lT1wjgzw",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "hamrostore-75e82.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "hamrostore-75e82",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "hamrostore-75e82.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "227521686758",
  appId: process.env.FIREBASE_APP_ID || "1:227521686758:web:5044c19e1a21745dc3df27",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-YLJSC00FP1"
};

let app;
let firestoredb;
const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoredb = getFirestore(app);
    console.log("Connected to Firebase");
    return app;
  } catch (error) {
    console.error("Error Connecting to Firebase:", error);
    return "Error Connecting to Firebase";
  }
};

const getFirebaseApp = () => app;

module.exports = {
  initializeFirebaseApp,
  getFirebaseApp,
  firestoredb // Export the Firestore instance if needed
};
