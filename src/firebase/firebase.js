// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2vosHbmPOjcZ-QkNTAGnYl1q06w3-y0M',
  authDomain: 'portfolio-d424c.firebaseapp.com',
  projectId: 'portfolio-d424c',
  storageBucket: 'portfolio-d424c.appspot.com',
  messagingSenderId: '817092728270',
  appId: '1:817092728270:web:9c02f71373b8a66efb879f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
