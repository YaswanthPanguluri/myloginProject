function getFormData(e) {  
  e.preventDefault();
  function getGen(){
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
  const cb = document.querySelector('#inputTC');
  let termsAndConditions =  cb.checked; 

  let inputDataObject = {
    fName : fName,
    lName : lName,
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

  let inputDataJsonObject = JSON.stringify(inputDataObject);
  console.log(inputDataJsonObject);
  dataValidation(inputDataJsonObject)
} 

function dataValidation(inputDataJsonObject){
  
    fNameValidation(inputDataJsonObject.fName);
    lNameValidation(inputDataJsonObject.lName);
    emailIdValidation(inputDataJsonObject.emailId);
    phoneNumberValidation(inputDataJsonObject.phoneNumber);
    passwordValidation(inputDataJsonObject.password);
    confirmPasswordValidation(inputDataJsonObject.confirmPassword);
    genderValidation(inputDataJsonObject.gender);
    address1Validation(inputDataJsonObject.address1);
    address2Validation(inputDataJsonObject.address2);
    cityValidation(inputDataJsonObject.city);
    stateValidation(inputDataJsonObject.state);
    zipValidation(inputDataJsonObject.zip);
    termsAndConditionsValidation(inputDataJsonObject.termsAndConditions);
}

function fNameValidation(fName){
 
}

function lNameValidation(lName){

}