function loginForm() {
  // Get the values of the email and password fields
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  // Perform validation
  if (email === 'demo@gmail.com' && password === '123') {
    // If validation is successful, redirect to success.html
    // window.location.href = 'file:///F:/js/loginProject/success.html';
    window.location.href = 'success.html';
  } else {
    // Display an error message or perform any other necessary actions
    alert('Invalid email or password');
  }
}
