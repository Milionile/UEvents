// Example event data
const events = [
  {
    id: "1",
    title: "Global Festival 2025",
    image: "../Pictures/Agregar-un-titulo.png",
    description: "Join the biggest cultural celebration in the heart of the city.",
    price: 500,
    organizer: "WorldFest Org",
    date: "2025-08-12",
    location: "Manila, Philippines"
  },

  {
    id: "2",
    title: "Defender Octa Launch",
    image: "../Pictures/event2.avif",
    description: "Get ready to witness the epic launch of our newest product, Defender Octa - an event full of excitement and innovation!",
    price: 0,
    organizer: "Land Rover",
    date: "2025-05-21",
    location: "80 Eulogio Rodriguez Jr. Avenue Quezon City, NCR 1110"
  },
];

// Get event ID from URL
const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');

// Find the event
const event = events.find(e => e.id === eventId);

if (event) {
  document.getElementById('event-image').src = event.image;
  document.getElementById('event-image').alt = event.title;
  document.getElementById('event-title').textContent = event.title;
  document.getElementById('event-date-main').textContent = `${event.date} • ${event.location}`;
  document.getElementById('event-description').textContent = event.description;
  document.getElementById('event-organizer').textContent = event.organizer;
  document.getElementById('ticket-price').textContent = `₱${event.price.toFixed(2)}`;
  document.getElementById('ticket-fee').textContent = `+₱${(event.price * 0.05).toFixed(2)} Fee`;
  document.getElementById('checkout-btn').textContent = `Check out for ₱${(event.price * 1.05).toFixed(2)}`;
}

window.updateCount = function(change) {
  const input = document.getElementById("ticketCount");
  let value = parseInt(input.value);
  value = Math.max(1, value + change);
  input.value = value;
  if (event) {
    document.getElementById('checkout-btn').textContent =
      `Check out for ₱${(event.price * value * 1.05).toFixed(2)}`;
    document.getElementById('ticket-fee').textContent =
      `+₱${(event.price * value * 0.05).toFixed(2)} Fee`;
  }
};


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