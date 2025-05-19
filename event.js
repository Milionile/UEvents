// Example event data
const events = [
  {
    id: "1",
    title: "Global Festival 2025",
    image: "https://source.unsplash.com/random/600x400?festival",
    description: "Join the biggest cultural celebration in the heart of the city.",
    price: 500,
    organizer: "WorldFest Org",
    date: "2025-08-12",
    location: "Manila, Philippines"
  },
  {
    id: "2",
    title: "Startup Summit",
    image: "https://source.unsplash.com/random/600x400?conference",
    description: "Where innovation meets opportunity. Meet top tech founders.",
    price: 1200,
    organizer: "InnovateNow PH",
    date: "2025-09-05",
    location: "Cebu, Philippines"
  }
];

// Get event ID from URL
const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');

// Find the event
const event = events.find(e => e.id === eventId);
const container = document.getElementById('event-details');

if (event) {
  container.innerHTML = `
    <div class="hero">
      <img src="${event.image}" alt="${event.title}" style="max-width:100%;border-radius:8px;">
    </div>
    <div class="event-date">${event.date}</div>
    <div class="event-title">${event.title}</div>
    <div class="description">${event.description}</div>

    <div class="ticket-box">
      <h3>General Admission</h3>
      <div class="ticket-controls">
        <button onclick="updateCount(-1)">−</button>
        <input type="text" id="ticketCount" value="1" style="width: 40px; text-align: center;" readonly>
        <button onclick="updateCount(1)">+</button>
      </div>
      <div>₱${event.price.toFixed(2)}</div>
      <a class="checkout-btn" href="#">Check out for ₱${(event.price * 1.05).toFixed(2)}</a>
    </div>
  `;
} else {
  container.innerHTML = `<h2>Event not found.</h2>`;
}

// Ticket count logic
function updateCount(change) {
  const input = document.getElementById("ticketCount");
  let value = parseInt(input.value);
  const basePrice = event ? event.price : 1;
  value = Math.max(1, value + change);
  input.value = value;
  document.querySelector(".checkout-btn").innerText = `Check out for ₱${(basePrice * value * 1.05).toFixed(2)}`;
}
