import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAP6-9aKrPodBWqvOo5K5gNW_CzLiBjqfw",
  authDomain: "readable-3a236.firebaseapp.com",
  databaseURL: "https://readable-3a236.firebaseio.com",
  projectId: "readable-3a236",
  storageBucket: "readable-3a236.appspot.com",
  messagingSenderId: "256110094735"
};
var fire = firebase.initializeApp(config);
export default fire;
