function register() {
  // Get user input
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Simple validation
  if (name === "" || email === "" || password === "") {
    alert("Please fill in all required fields");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // Store credentials in local storage
  var userData = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  // Registration successful message
  alert("Registration successful!");
    window.location.href = "/login.html";
     return true;

    
  
}

function validateLogin() {
  // Get user input
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Retrieve stored credentials from local storage
  var storedData = localStorage.getItem('userData');
  
  if (!storedData) {
    alert("No account registered. Please sign up.");
    return;
  }

  var userData = JSON.parse(storedData);

  // Simple validation
  if (email === userData.email && password === userData.password) {
    // Successful login, redirect or perform other actions
    alert("Login successful!");
    window.location.href = "/Hompage.html";
  } else {
    // Display error message
    alert("Invalid email or password");
  }
}

var isLoggedIn = false;

       

          function toggleLoginStatus() {
              var loginListItem = document.getElementById("loginListItem");
  
              if (isLoggedIn) {
                loginListItem.innerHTML = '<a href="login.html" style="color:#5f78ff">Sign Out</a>';
                  alert("Logged out!"); // You can replace this with actual logout actions
                  isLoggedIn = false;
                  loginListItem.innerHTML = '<a href="login.html" style="color:#5f78ff">Login</a>';
              } else {
                  // If not logged in, redirect to the login page
                  window.location.href = "/login.html";
              }
          }
        