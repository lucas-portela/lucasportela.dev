import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default boot(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyB7maJuLQutm3ViNxsuESazv2TF8P8YHQA",
    authDomain: "lucas-portela.firebaseapp.com",
    projectId: "lucas-portela",
    storageBucket: "lucas-portela.appspot.com",
    messagingSenderId: "890838819351",
    appId: "1:890838819351:web:f620332e65d3108d307252",
    measurementId: "G-XVYD2PCH5D",
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
});
