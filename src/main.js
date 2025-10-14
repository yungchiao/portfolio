// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import Vue from 'vue';
import App from './App.vue';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo7xHv7JmLDAVevEBQrYSE-VUosOfmQ_w",
    authDomain: "portfolio-c166f.firebaseapp.com",
    projectId: "portfolio-c166f",
    storageBucket: "portfolio-c166f.firebasestorage.app",
    messagingSenderId: "788476186033",
    appId: "1:788476186033:web:a8ed54c9df86425fb08190",
    measurementId: "G-SMFCWJGF9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
    render: h => h(App),
}).$mount('#app');
