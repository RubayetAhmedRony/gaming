document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    const errorMessage = document.getElementById('error-message');
    
    // Reset the error message
    errorMessage.style.display = 'none';
  
    // Simple validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'All fields are required!';
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Passwords do not match!';
      return;
    }
  
    // If all validations pass, show a success message
    alert('Sign Up Successful!');
    // Optionally, you can send the form data to the server here
  });
  