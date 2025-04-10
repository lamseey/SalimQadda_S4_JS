import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxjPpaVcdBhJ0OABj_8MeAfHUc9eJ0uw4",
  authDomain: "forum-app-acc8c.firebaseapp.com",
  projectId: "forum-app-acc8c",
  storageBucket: "forum-app-acc8c.firebasestorage.app",
  messagingSenderId: "806103128816",
  appId: "1:806103128816:web:9fc6d89480f6fe74354035"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
