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
  {
    id: "3",
    title: "Traders Fair 2025 - (Financial Education Event)",
    image: "../Pictures/event3.avif",
    description: "tocks, Forex, Futures, Cryptocurrency and Options, Investing and Brokers - all in one trading educational event!",
    price: 0,
    organizer: "FINEXPO - Traders Fair & Traders Awards",
    date: "2025-05-24",
    location: "Edsa Shangri-La, Manila"
  },
  {
  id: "4",
  title: "Life Fairview Terraces Fund Raising",
  image: "../Pictures/event4.avif",
  description: "Brace yourselves for we are about to embark on a BIGGER SCREEN for a BIGGER PURPOSE!",
  price: 950,
  organizer: "Life An Every Nation Church",
  date: "2025-05-24",
  location: "Ayala Malls Fairview Terraces"
},

{
  id: "5",
  title: "G-DRAGON: Übermensch Tour",
  image: "../Pictures/event5.jpg",
  description: "K-pop icon G-DRAGON performs his long-awaited solo show with powerful visuals and stagecraft.",
  price: 8500,
  organizer: "AEG Presents Asia",
  date: "2025-05-17",
  location: "Philippine Arena, Bulacan"
},

{
  id: "6",
  title: "Boyz II Men: Live in Manila",
  image: "../Pictures/event6.jpg",
  description: "The iconic R&B group serenades fans with timeless hits and smooth harmonies.",
  price: 1200,
  organizer: "Wilbros Live",
  date: "2025-05-18",
  location: "Smart Araneta Coliseum, Quezon City"
},

{
  id: "7",
  title: "Snarky Puppy: We Like It Here Tour",
  image: "../Pictures/event7.webp",
  description: "A celebration of their jazz-fusion masterpiece with a live set full of groove and musicianship.",
  price: 4910,
  organizer: "Karpos Multimedia",
  date: "2025-05-27",
  location: "The Filinvest Tent, Muntinlupa City"
},

{
  id: "8",
  title: "ADO World Tour: Manila Stop",
  image: "../Pictures/event8.jpg",
  description: "The mysterious J-pop artist known for anime soundtracks brings an immersive visual-musical experience.",
  price: 3200,
  organizer: "Ovation Productions",
  date: "2025-05-08",
  location: "SM Mall of Asia Arena, Pasay"
},

{
  id: "9",
  title: "Dear Evan Hansen",
  image: "../Pictures/event9.webp",
  description: "A heartwarming story of love, loss, and redemption.",
  price: 1200,
  organizer: "GMG Productions",
  date: "2025-09-4",
  location: "Solaire"
},
{
  id: "10",
  title: "Hamilton: Manila Premiere",
  image: "../Pictures/event10.webp",
  description: "Lin-Manuel Miranda’s revolutionary musical debuts in Manila, blending hip-hop, jazz, and history in a genre-defining theatrical experience.",
  price: 4200,
  organizer: "GMG Productions",
  date: "2025-09-17",
  location: "The Theatre at Solaire, Parañaque City"
},

{
  id: "11",
  title: "Delia D.",
  image: "../Pictures/event11.jpg",
  description: "An original Filipino musical spotlighting queer stories, set to the music of Jonathan Manalo. Bold, powerful, and proudly local.",
  price: 2500,
  organizer: "TicketWorld PH",
  date: "2025-04-25",
  location: "Newport Performing Arts Theater, Pasay City"
},

{
  id: "12",
  title: "One More Chance, The Musical",
  image: "../Pictures/event12.webp",
  description: "A stage adaptation of the hit film, featuring the music of Ben&Ben in a heartfelt romantic journey.",
  price: 1200,
  organizer: "Philippine Educational Theater Association (PETA)",
  date: "2025-08-22",
  location: "PETA Theater Center, New Manila, Quezon City"
},

{
  id: "13",
  title: "Valorant Champions Tour: Masters Toronto",
  image: "../Pictures/event13.avif",
  description: "Top Valorant teams clash in Toronto for a chance to advance to Champions 2025 in Paris.",
  price: 0,
  organizer: "Riot Games",
  date: "2025-06-07",
  location: "Online / Toronto, Canada (Streaming Available)"
},
{
  id: "14",
  title: "Global Gaming Expo (G2E) 2025",
  image: "../Pictures/event14.jpg",
  description: "The premier event for the global gaming industry, showcasing the latest innovations and trends shaping the future of gaming.",
  price: 1500,
  organizer: "Global Gaming Expo",
  date: "2025-10-06",
  location: "The Venetian Expo, Las Vegas, USA"
},

{
  id: "15",
  title: "Gamescom 2025",
  image: "../Pictures/event15.webp",
  description: "The world's largest gaming event where developers showcase upcoming titles and gaming technology innovations.",
  price: 1200,
  organizer: "Koelnmesse",
  date: "2025-08-20",
  location: "Koelnmesse, Cologne, Germany"
},

{
  id: "16",
  title: "Summer Game Fest 2025",
  image: "../Pictures/event16.webp",
  description: "A global event celebrating the latest in gaming with world premieres, live performances, and exclusive content.",
  price: 0,
  organizer: "Summer Game Fest",
  date: "2025-06-06",
  location: "YouTube Theater, Los Angeles, USA"
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