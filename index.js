// information of register
var nameSignup = document.querySelector("#name");
var mailSignup = document.querySelector("#mailforsignup");
var passSignup = document.querySelector("#passforsignup");
var textMessage = document.querySelector(".messagetext");
var btnsign = document.querySelector("#signup");

// signup operations
var arrayinputs = [];
if (localStorage.getItem("inputs") != null) {
  arrayinputs = JSON.parse(localStorage.getItem("inputs"));
}

btnsign.addEventListener("click", function () {
  var validation = validate();
  if (
    validation.nameValidation &&
    validation.mailValidation &&
    validation.passValidation &&
    isEmailExists(mailSignup.value, arrayinputs) == false
  ) {
    var data = {
      name: nameSignup.value,
      mail: mailSignup.value,
      pass: passSignup.value,
    };
    arrayinputs.push(data);
    localStorage.setItem("inputs", JSON.stringify(arrayinputs));
    clearInputs();
    textMessage.textContent = "Success";
    textMessage.style.color = "#4BB543";
  } else if (
    isEmailExists(mailSignup.value, arrayinputs) == true &&
    mailSignup.value != ""
  ) {
    textMessage.textContent = "Email Already Exists";
    textMessage.style.color = "#C73E1D";
  } else {
    textMessage.textContent = "Error! Please Enter Valid Information";
    textMessage.style.color = "#C73E1D";
  }
});

function clearInputs() {
  nameSignup.value = "";
  mailSignup.value = "";
  passSignup.value = "";
}

function validate() {
  var validateInputs = {
    validateName: /^[a-zA-Z ]{3,}$/,
    validateemail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validatepass: /^(?=.*[a-zA-Z]|\d).{8,}$/,
  };
  var validname = validateInputs.validateName.test(nameSignup.value);
  var validmail = validateInputs.validateemail.test(mailSignup.value);
  var validpass = validateInputs.validatepass.test(passSignup.value);
  return {
    nameValidation: validname,
    mailValidation: validmail,
    passValidation: validpass,
  };
}

function isEmailExists(email, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].email == email.value) {
      return true;
    }
  }

  return false;
}
