import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhGdXV9-W0FpMg_yDibyAhEDuNOMSFYVM",
  authDomain: "products-page-c9893.firebaseapp.com",
  projectId: "products-page-c9893",
  storageBucket: "products-page-c9893.appspot.com",
  messagingSenderId: "198615565067",
  appId: "1:198615565067:web:0febc6131e9fc73da6d80e",
  measurementId: "G-NTEVRR833H",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// getAnalytics(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");
