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
