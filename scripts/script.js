// // create reference for input fields.
// const firstNameInput = document.querySelector("#first-name-input");
// const lastNameInput = document.querySelector("#last-name-input");

// // create reference for buttons.
// const submitBtn = document.querySelector("#submit-btn");

// // simple email validation
// function validateEmail(email) {
//   var atPos = email.indexOf("@");
//   var dotPos = email.lastIndexOf(".");
//   return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
// }

// // add callback function for firstNameInput.onkeyup event
// firstNameInput.onkeyup = () => {
//   firstNameInput.classList.remove("is-valid");
//   firstNameInput.classList.remove("is-invalid");
// };

// // add callback functions for other input events.
// // (lastname, email, password, confirm password)

// // add callback function for submit button.
// submitBtn.onclick = () => {
//   isFirstNameOk = false;

//   // validate first name
//   if (firstNameInput.value !== "CPE207") {
//     firstNameInput.classList.add("is-invalid");
//   } else {
//     firstNameInput.classList.add("is-valid");
//     isFirstNameOk = true;
//   }

//   // validate last name

//   // validate email

//   // validate password

//   // validate confirm password

//   if (isFirstNameOk) alert("Registered successfully");
// };

// // add callback function for Reset button.

// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector('#email-input')
const passInput = document.querySelector('#password-input');
const ConfInput = document.querySelector('#password-confirm-input');

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector('#reset-btn');

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passInput.onkeyup = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
}

ConfInput.onkeyup = () => {
  ConfInput.classList.remove("is-valid");
  ConfInput.classList.remove("is-invalid");
}

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isFirstNameOk = false; 
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
    if (lastNameInput.value === "") {
      lastNameInput.classList.add("is-invalid");
    } else {
      lastNameInput.classList.add("is-valid");
      isLastNameOk = true;
    }

  // validate email
  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passInput.value.length >= 6) {
    passInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passInput.classList.add("is-invalid");
  }

  // validate confirm password
  if (ConfInput.value === passInput.value && ConfInput.value.length >= 6) {
    ConfInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  } else {
    ConfInput.classList.add("is-invalid");
  }

  if (isFirstNameOk 
      && isLastNameOk 
      && isEmailOk 
      && isPasswordOk 
      && isPasswordConfirmOk) 
      alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;

  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passInput.value = "";
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");

  ConfInput.value = "";
  ConfInput.classList.remove("is-valid");
  ConfInput.classList.remove("is-invalid");
}

//warangkana chitwarangkana 660610792