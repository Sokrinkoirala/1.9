const CLIENT_ID = '351539074321-qs3qg5pjmhc35mjbrr1lc84k2oaur3fg.apps.googleusercontent.com';

function initClient() {
  gapi.load('client:auth2', function() {
    gapi.auth2.init({
      client_id: CLIENT_ID,
      scope: 'profile email' // Added scope
    });
  });
}

function googleLogin() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then(function(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    alert("Logged in as: " + profile.getName());
  }).catch(function(error) {
    console.error('Error during Google login:', error); // Enhanced logging
    alert("Error during login: " + error.error);
  });
}

function toggleForm() {
  const loginSection = document.getElementById('login-section');
  const signupSection = document.getElementById('signup-section');
  const title = document.getElementById('title');
  const toggleText = document.querySelector('.toggle');

  if (signupSection.style.display === 'none') {
    loginSection.style.display = 'none';
    signupSection.style.display = 'block';
    title.innerText = 'Sign Up';
    toggleText.innerText = 'Login';
  } else {
    loginSection.style.display = 'block';
    signupSection.style.display = 'none';
    title.innerText = 'Login';
    toggleText.innerText = 'Sign Up';
  }
}

function submitSignup() {
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const nepali = document.querySelector('input[name="nepali"]:checked')?.value;

  if (!name || !contact || !nepali) {
    alert("Please fill in all the fields.");
    return;
  }

  console.log({
    name: name,
    contact: contact,
    nepali: nepali
  });
  
  alert("Sign-up details submitted!");
}

// Initialize Google client after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  initClient();
});
