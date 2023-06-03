var cy = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = '\u00A9' + cy+"-"+(cy+1);


function loginForm() {
  // Get the values of the email and password fields
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  // Perform validation
  if (email === 'demo@gmail.com' && password === '123') {
    // If validation is successful, redirect to success.html
    window.location.href = 'success.html';
  } 
  else {
    // If validation is not successful, redirect to invalid.html
    window.location.href = 'invalid.html';
  }
}


