document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login');
  const signupForm = document.getElementById('signup');
  const switchToSignup = document.getElementById('switch-to-signup');
  const switchToLogin = document.getElementById('switch-to-login');

  // Switch to Signup form
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    loginForm.classList.add('hidden'); // Hide login form
    signupForm.classList.remove('hidden'); // Show signup form
  });

  // Switch to Login form
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    signupForm.classList.add('hidden'); // Hide signup form
    loginForm.classList.remove('hidden'); // Show login form
  });

  // Example login form handling logic
  const loginSubmit = document.getElementById('login-form');
  loginSubmit.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple authentication logic
    if (email === "testmail@gmail.com" && password === "qwertyuiop") {
      alert('Login successful!');
      window.location.href = 'learnapp/index.html';

    } else {
      alert('Incorrect email or password');
    }
  });

  // Example signup form handling logic
  const signupSubmit = document.getElementById('signup-form');
  signupSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simple signup logic
    if (email && password) {
      alert('Signup successful! Please log in.');
      signupForm.classList.add('hidden'); // Hide signup form
      loginForm.classList.remove('hidden'); // Show login form
    } else {
      alert('Please fill in all fields.');
    }
  });
});
