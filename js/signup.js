let errorMessage = "Thanks for registering";
function getFormData(e) {
  e.preventDefault();

  
  function getGen() {
    let gen = null;
    let genRadios = document.querySelectorAll('input[name="inputGender"]');
    for (let i = 0; i < genRadios.length; i++) {
      if (genRadios[i].checked) {
        if (genRadios[i].value === "Male") {
          gen = "Male";
        } else if (genRadios[i].value === "Female") {
          gen = "Female";
        }
        break;
      }
    }
    if (gen) {
      return gen;
    } else {
      console.error("Please select a gender");
    }
  }

  let fName = document.getElementById("inputFirstName").value;
  let lName = document.getElementById("inputLastName").value;
  let emailId = document.getElementById("inputEmailId").value;
  let phoneNumber = document.getElementById("inputPassword").value;
  let password = document.getElementById("inputPassword").value;
  let confirmPassword = document.getElementById("inputConfirmPassword").value;
  let gender = getGen();
  let address1 = document.getElementById("inputAddress1").value;
  let address2 = document.getElementById("inputAddress2").value;
  let city = document.getElementById("inputCity").value;
  let state = document.getElementById("inputState").value;
  let zip = document.getElementById("inputZip").value;
  const cb = document.querySelector("#inputTC");
  let termsAndConditions = cb.checked;

  let inputDataObject = {
    fName: fName,
    lName: lName,
    emailId: emailId,
    phoneNumber: phoneNumber,
    password: password,
    confirmPassword: confirmPassword,
    gender: gender,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zip: zip,
    termsAndConditions: termsAndConditions,
  };

  let inputDataJsonObject = JSON.stringify(inputDataObject);
  console.log(inputDataJsonObject);
  dataValidation(inputDataJsonObject);

  alert(errorMessage);
}

function dataValidation(inputDataJsonObject) {
  fNameValidation(inputDataJsonObject.fName);
  lNameValidation(inputDataJsonObject.lName);
  emailIdValidation(inputDataJsonObject.emailId);
  phoneNumberValidation(inputDataJsonObject.phoneNumber);
  passwordValidation(inputDataJsonObject.password);
  confirmPasswordValidation(
    inputDataJsonObject.confirmPassword,
    inputDataJsonObject.password
  );
  genderValidation(inputDataJsonObject.gender);
  address1Validation(inputDataJsonObject.address1);
  address2Validation(inputDataJsonObject.address2);
  cityValidation(inputDataJsonObject.city);
  stateValidation(inputDataJsonObject.state);
  zipValidation(inputDataJsonObject.zip);
  termsAndConditionsValidation(inputDataJsonObject.termsAndConditions);
}

function fNameValidation(fName) {
  if (fName.trim() === "") {
    console.error("First name is required");
    errorMessage = errorMessage+"First name is required\n";
    return false;
  }

  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9]/;
  if (specialCharsRegex.test(fName)) {
    console.error(
      "First name should not contain special characters or numbers"
    );
    return false;
  }

  return true;
}

function lNameValidation(lName) {
  if (fName.trim() === "") {
    console.error("Last name is required");
    errorMessage = errorMessage+"Last name is required\n";
    return false;
  }

  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9]/;
  if (specialCharsRegex.test(fName)) {
    console.error("Last name should not contain special characters or numbers");
    errorMessage = errorMessage+"Last name should not contain special characters or numbers\n";
    return false;
  }

  return true;
}

function emailIdValidation(emailId) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailId)) {
    console.error("Invalid email address");
    errorMessage = errorMessage+"Invalid email address\n";
    
    return false;
  }
  return true;
}

function phoneNumberValidation(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    console.error("Invalid phone number");
    errorMessage = errorMessage+"Invalid phone number\n";
    return false;
  }
  return true;
}

function passwordValidation(password) {
  if (password.length < 8) {
    console.error("Password should be at least 8 characters long");
    errorMessage = errorMessage+"Password should be at least 8 characters long\n";
    return false;
  }
  return true;
}

function confirmPasswordValidation(confirmPassword, password) {
  if (confirmPassword !== password) {
    console.error("Passwords do not match");
    errorMessage = errorMessage+"Passwords do not match\n";
    return false;
  }
  return true;
}

function genderValidation(gender) {
  if (!gender) {
    console.error("Please select a gender");
    errorMessage = errorMessage+"Please select a gender\n";
    return false;
  }
  return true;
}

function address1Validation(address1) {
  if (address1.trim() === "") {
    console.error("Address line 1 is required");
    errorMessage = errorMessage+"Address line 1 is required\n";
    return false;
  }
  return true;
}

function address2Validation(address2) {
  // Optional: Implement validation if necessary
  return true;
}

function cityValidation(city) {
  if (city.trim() === "") {
    console.error("City is required");
    errorMessage = errorMessage+"City is required\n";
    return false;
  }

  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9]/;
  if (specialCharsRegex.test(city)) {
    console.error("City name should not contain special characters or numbers");
    return false;
  }

  return true;
}

function stateValidation(state) {
  if (state === "NA") {
    console.error("Please select a state");
    errorMessage = errorMessage+"Please select a state\n";
    return false;
  }
  return true;
}

function zipValidation(zip) {
  const zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zip)) {
    console.error("Invalid ZIP code");
    errorMessage = errorMessage+"Invalid ZIP code\n";
    return false;
  }
  return true;
}

function termsAndConditionsValidation(termsAndConditions) {
  if (!termsAndConditions) {
    console.error("You must agree to the terms and conditions");
    errorMessage = errorMessage+"You must agree to the terms and conditions\n";
    return false;
  }
  return true;
}
