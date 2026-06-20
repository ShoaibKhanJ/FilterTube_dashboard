import {
  auth,
  provider,
  signInWithPopup
} from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {

  console.log("LOGIN JS LOADED");

  const loginBtn = document.getElementById("googleLogin");

  if (!loginBtn) {
    console.error("Google login button NOT FOUND");
    return;
  }

  loginBtn.addEventListener("click", async () => {

    console.log("BUTTON CLICKED");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("LOGIN SUCCESS:", user);

      // SAFE DISPLAY (NO MISSING ELEMENTS ERROR)

      alert(`
Login Success!
Name: ${user.displayName}
Email: ${user.email}
`);

      // Optional: store user
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));

    } catch (error) {
      console.error("Google Login Error:", error);
      alert(error.message);
    }
  });

});