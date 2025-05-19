let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(step) {
  slideIndex += step;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  document.querySelector(".slider").style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 7 seconds
setInterval(() => moveSlide(1), 7000);

  // Generic function to initialize modals
  function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const cancelBtn = modal.querySelector(".cancelbtn");

    // Open modal
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    // Close with 'X'
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close with 'Cancel'
    cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close if clicking outside the modal content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Setup for both Login and Signup modals
  setupModal("loginModal", "openLogin", "closeLogin");
  setupModal("signupModal", "openSignup", "closeSignup");

  document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault();
  const name = this['signup-name'].value;
  const email = this['signup-email'].value;
  const password = this['signup-psw'].value;
  const confirm = this['signup-psw-repeat'].value;

  if(password !== confirm) {
    alert('Passwords do not match!');
    return;
  }

  // Save user info to localStorage (for demo only)
  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Sign up successful! You can now log in.');
  this.reset();
  document.getElementById('signupModal').style.display = 'none';
};

document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  const email = this['login-email'].value;
  const password = this['login-psw'].value;
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if(user.email === email && user.password === password) {
    alert('Login successful! Welcome, ' + user.name);
    // You can redirect or update UI here
    window.location.href = 'html/indexlogedin.html';
  } else {
    alert('Invalid email or password!');
  }
};