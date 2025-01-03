document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    // Basic validation (add more as needed)
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in all fields.";
      errorMessage.style.display = "block";
    } else {
      // You can add the logic to authenticate the user here
      errorMessage.style.display = "none";
      alert("Login successful!");
    }
  });
  