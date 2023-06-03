function display(){let fName = document.getElementById("inputFirstName").innerText;
let lName = document.getElementById("inputLastName").innerText;
let emailId = document.getElementById("inputEmailId").innerText;
let phoneNumber = document.getElementById("inputPassword").innerText;
let password = document.getElementById("inputPassword").value;
let confirmPassword = document.getElementById("inputConfirmPassword").value;
let gender = document.querySelector('input[name="inputGender"]:checked').value;
let address1 = document.getElementById("inputAddress1").innerText;
let address2 = document.getElementById("inputAddress2").innerText;
let city = document.getElementById("inputCity").innerText;
let state = document.getElementById("inputState").innerText;
let zip = document.getElementById("inputZip").innerText;
const cb = document.querySelector('#inputTC');
let termsAndConditions =  cb.checked; 
//------------------------------------------

let data = {
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
    termsAndConditions: termsAndConditions
  };  
  console.log(JSON.stringify(data));

}