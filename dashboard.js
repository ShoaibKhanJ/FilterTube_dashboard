const user = JSON.parse(localStorage.getItem("ft_user"));

if (!user) {
  window.location.href = "./login.html";
}

document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;
document.getElementById("avatar").src = user.photo;