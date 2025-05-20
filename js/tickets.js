document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    const ticketCount = parseInt(urlParams.get('tickets') || '1');
    
    if (eventId) {
        const statsElement = document.querySelector('.stats');
        statsElement.textContent = '1 order • 0 likes • 0 following';

        const event = events.find(e => e.id === eventId);
        if (event) {
            const calculatedPrice = event.price * ticketCount * 1.05;
            const ordersContainer = document.getElementById('orders-container');
            ordersContainer.innerHTML = `
                <div class="event-card">
                    <img src="${event.image}" alt="${event.title}">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <p><strong>Tickets:</strong> ${ticketCount}</p>
                    <p><strong>Total Price:</strong> ${event.price === 0 ? 'Free!' : `₱${calculatedPrice.toFixed(2)} (includes 5% fee)`}</p>
                    <p><strong>Organizer:</strong> ${event.organizer}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                </div>
            `;
        }
    }
});
