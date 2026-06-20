import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxxH1QgNC-6xZLkKZG8R6JoBiIWytP1Ww",
  authDomain: "filtertube-492a6.firebaseapp.com",
  projectId: "filtertube-492a6",
  storageBucket: "filtertube-492a6.firebasestorage.app",
  messagingSenderId: "1054748277981",
  appId: "1:1054748277981:web:cb548757ec60b05137af34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// IMPORTANT FIX: allow popup behavior
provider.setCustomParameters({
  prompt: "select_account"
});

export { auth, provider, signInWithPopup, onAuthStateChanged, signOut };