// information of login
var emailLogin = document.querySelector("#email");
var passwordLogin = document.querySelector("#pass");
var btnLogin = document.querySelector(".login");
var textmessageLogin = document.querySelector(".messagetextlogin");

// Retrieve data from local storage
var arrayinputs = localStorage.getItem("inputs")
  ? JSON.parse(localStorage.getItem("inputs"))
  : [];

// login operations
btnLogin.addEventListener("click", function () {
  if (checkmail() && checkpassword()) {
    var user = arrayinputs.find(
      (user) =>
        user.mail === emailLogin.value && user.pass === passwordLogin.value
    );
    if (user) {
      // Save the name in sessionStorage to access it on the welcome page
      sessionStorage.setItem("currentUser", user.name);
      window.location.href = "home.html"; // Redirect to the welcome page after successful login
    }
  } else {
    textmessageLogin.innerHTML = "Incorrect Email Or Password";
    textmessageLogin.style.color = "#C73E1D";
  }
});

function checkmail() {
  for (var i = 0; i < arrayinputs.length; i++) {
    if (arrayinputs[i].mail == emailLogin.value) {
      return true;
    }
  }
  return false;
}
function checkpassword() {
  for (var i = 0; i < arrayinputs.length; i++) {
    if (arrayinputs[i].pass == passwordLogin.value) {
      return true;
    }
  }
  return false;
}
