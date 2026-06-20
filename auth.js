import { auth, provider } from "./firebase.js";
import {
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

// LOGIN
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    msg.innerText = err.message;
  }
});

// AUTO REDIRECT IF LOGGED IN
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});