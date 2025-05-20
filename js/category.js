// Get category from URL, e.g. category.html?cat=Music
const params = new URLSearchParams(window.location.search);
const category = params.get('cat') || "Music";

// Set page title and heading
document.getElementById('page-title').textContent = `${category} Events | UEvents`;
document.getElementById('category-title').textContent = `${category} Events`;
document.getElementById('category-desc').textContent = `Discover the best ${category.toLowerCase()} events happening near you!`;

// Breadcrumb
document.getElementById('breadcrumb').innerHTML = `
  <a href="../index.html">Home</a> &gt; <span>${category} Events</span>
`;

// Filter and render events
const filteredEvents = events.filter(e => e.category.toLowerCase() === category.toLowerCase());
const list = document.getElementById('event-list');
if (filteredEvents.length === 0) {
  list.innerHTML = "<p>No events found in this category.</p>";
} else {
  list.innerHTML = filteredEvents.map(event => `
    <div class="event-card">
      <img src="${event.image}" alt="${event.title}">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Price:</strong> ${event.price === 0 ? "Free!" : "PHP " + event.price.toLocaleString()}</p>
      <p><strong>Organizer:</strong> ${event.organizer}</p>
      <button class="cta-button" onclick="window.location.href='event.html?id=${event.id}'">Learn More</button>
    </div>
  `).join('');
}