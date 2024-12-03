// Retrieve data from local storage
var arrayinputs = localStorage.getItem("inputs")
  ? JSON.parse(localStorage.getItem("inputs"))
  : [];

var btnLogout = document.querySelector("#logout");

btnLogout.addEventListener("click", function () {
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("currentUser");
  // Display the personalized welcome message
  const welcomeMessageElement = document.querySelector(".texttoshow");
  welcomeMessageElement.textContent = `Welcome  ${currentUser}`;
});
