// Example event data
const seatPicker = document.getElementById('seat-picker');
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
    description: "Stocks, Forex, Futures, Cryptocurrency and Options, Investing and Brokers - all in one trading educational event!",
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
    days: ["2025-05-17", "2025-05-18"],
    seatTypes: [
      { type: "SVIP", price: 12000 },
      { type: "VIP", price: 9000 },
      { type: "Regular", price: 5000 }
    ],
    seatMap: {
      "SVIP": ["A1", "A2", "A3", "A4", "A5"],
      "VIP": ["B1", "B2", "B3", "B4", "B5", "B6"],
      "Regular": ["C1", "C2", "C3", "C4", "C5", "C6"]
    },
    occupiedSeats: {
      "2025-05-17": {
        "SVIP": ["A2"],
        "VIP": ["B3", "B4"],
        "Regular": ["C1"]
      },
      "2025-05-18": {
        "SVIP": [],
        "VIP": ["B1"],
        "Regular": ["C2", "C3"]
      }
    },
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
    days: ["2025-05-18"],
    seatTypes: [
      { type: "VIP", price: 2500 },
      { type: "Regular", price: 1200 }
    ],
    seatMap: {
      "VIP": ["A1", "A2", "A3", "A4"],
      "Regular": ["B1", "B2", "B3", "B4", "B5"]
    },
    occupiedSeats: {
      "2025-05-18": {
        "VIP": ["A3"],
        "Regular": ["B2"]
      }
    },
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
    days: ["2025-05-27"],
    seatTypes: [
      { type: "VIP", price: 6000 },
      { type: "Regular", price: 4910 }
    ],
    seatMap: {
      "VIP": ["A1", "A2", "A3"],
      "Regular": ["B1", "B2", "B3", "B4"]
    },
    occupiedSeats: {
      "2025-05-27": {
        "VIP": [],
        "Regular": ["B4"]
      }
    },
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
    days: ["2025-05-08"],
    seatTypes: [
      { type: "VIP", price: 5000 },
      { type: "Regular", price: 3200 }
    ],
    seatMap: {
      "VIP": ["A1", "A2", "A3"],
      "Regular": ["B1", "B2", "B3", "B4", "B5"]
    },
    occupiedSeats: {
      "2025-05-08": {
        "VIP": ["A1"],
        "Regular": []
      }
    },
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
    days: ["2025-09-04", "2025-09-05"],
    seatTypes: [
      { type: "Orchestra", price: 2500 },
      { type: "Balcony", price: 1200 }
    ],
    seatMap: {
      "Orchestra": ["A1", "A2", "A3", "A4", "A5"],
      "Balcony": ["B1", "B2", "B3", "B4"]
    },
    occupiedSeats: {
      "2025-09-04": {
        "Orchestra": ["A2"],
        "Balcony": []
      },
      "2025-09-05": {
        "Orchestra": [],
        "Balcony": ["B3"]
      }
    },
    date: "2025-09-04",
    location: "Solaire"
  },
  {
    id: "10",
    title: "Hamilton: Manila Premiere",
    image: "../Pictures/event10.webp",
    description: "Lin-Manuel Miranda’s revolutionary musical debuts in Manila, blending hip-hop, jazz, and history in a genre-defining theatrical experience.",
    price: 4200,
    organizer: "GMG Productions",
    days: ["2025-09-17", "2025-09-18", "2025-09-19"],
    seatTypes: [
      { type: "VIP", price: 7000 },
      { type: "Orchestra", price: 4200 },
      { type: "Balcony", price: 2000 }
    ],
    seatMap: {
      "VIP": ["A1", "A2", "A3", "A4"],
      "Orchestra": ["B1", "B2", "B3", "B4", "B5"],
      "Balcony": ["C1", "C2", "C3"]
    },
    occupiedSeats: {
      "2025-09-17": {
        "VIP": ["A1"],
        "Orchestra": ["B2"],
        "Balcony": []
      },
      "2025-09-18": {
        "VIP": [],
        "Orchestra": [],
        "Balcony": ["C2"]
      },
      "2025-09-19": {
        "VIP": ["A3"],
        "Orchestra": [],
        "Balcony": []
      }
    },
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
    days: ["2025-04-25"],
    seatTypes: [
      { type: "VIP", price: 3500 },
      { type: "Regular", price: 2500 }
    ],
    seatMap: {
      "VIP": ["A1", "A2", "A3"],
      "Regular": ["B1", "B2", "B3", "B4"]
    },
    occupiedSeats: {
      "2025-04-25": {
        "VIP": [],
        "Regular": ["B2"]
      }
    },
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
    days: ["2025-08-22"],
    seatTypes: [
      { type: "VIP", price: 2000 },
      { type: "Regular", price: 1200 }
    ],
    seatMap: {
      "VIP": ["A1", "A2"],
      "Regular": ["B1", "B2", "B3"]
    },
    occupiedSeats: {
      "2025-08-22": {
        "VIP": [],
        "Regular": []
      }
    },
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
  {
    id: "21",
    title: "A Night Out in Manila",
    image: "../Pictures/nightlife.avif",
    description: "City life can be lonely, especially when you’re surrounded by so many people. Take the opportunity to meet others hoping for new connections",
    price: 700,
    organizer: "Ermantourage Europe & US",
    date: "2025-05-23",
    location: "Blackbird Makati",
    category: "Nightlife"
  },
  {
    id: "31",
    title: "Broadway in Manila",
    image: "../Pictures/performing-arts1.jpg",
    description: "A night of world-class musical performances.",
    price: 2500,
    organizer: "StageWorks",
    date: "2025-07-01",
    location: "Cultural Center of the Philippines",
    category: "Performing & Visual Arts"
  },
  {
    id: "41",
    title: "Christmas Market Festival",
    image: "../Pictures/holidays1.jpg",
    description: "Celebrate the holidays with food, music, and gifts.",
    price: 0,
    organizer: "Holiday Events PH",
    date: "2025-12-15",
    location: "Bonifacio High Street",
    category: "Holidays"
  },
  {
    id: "51",
    title: "Singles Mixer Night",
    image: "../Pictures/dating1.jpg",
    description: "Meet new people and maybe find your match!",
    price: 500,
    organizer: "LoveConnect",
    date: "2025-06-20",
    location: "Makati, Philippines",
    category: "Dating"
  },
  {
    id: "61",
    title: "DIY Crafting Workshop",
    image: "../Pictures/hobbies1.jpg",
    description: "Unleash your creativity with hands-on crafting.",
    price: 300,
    organizer: "CraftyHands",
    date: "2025-07-10",
    location: "Quezon City",
    category: "Hobbies"
  },
  {
    id: "71",
    title: "Startup Summit 2025",
    image: "../Pictures/business1.jpg",
    description: "Where innovation meets opportunity. Meet top tech founders.",
    price: 1200,
    organizer: "InnovateNow PH",
    date: "2025-09-05",
    location: "Cebu, Philippines",
    category: "Business"
  },
  {
    id: "81",
    title: "Food & Drink Expo",
    image: "../Pictures/food1.jpg",
    description: "Taste the best food and drinks from around the world.",
    price: 200,
    organizer: "Foodies United",
    date: "2025-08-15",
    location: "SMX Convention Center",
    category: "Food & Drink"
  }
];

// Get event ID from URL
const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');
const event = events.find(e => e.id === eventId);
console.log("Loaded event:", event);

if (event) {
  document.getElementById('event-image').src = event.image;
  document.getElementById('event-image').alt = event.title;
  document.getElementById('event-title').textContent = event.title;
  document.getElementById('event-date-main').textContent = `${event.date} • ${event.location}`;
  document.getElementById('event-description').textContent = event.description;
  document.getElementById('event-organizer').textContent = event.organizer;

  // Hide General Admission and price if seatTypes exist
  const ticketTypeLabel = document.getElementById('ticket-type-label');
  const ticketPrice = document.getElementById('ticket-price');
  if (event.seatTypes && event.seatTypes.length > 0) {
    ticketTypeLabel.style.display = 'none';
    ticketPrice.style.display = 'none';
  } else {
    ticketTypeLabel.style.display = '';
    ticketPrice.style.display = '';
    ticketPrice.textContent = `₱${event.price.toFixed(2)}`;
  }
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

document.addEventListener('DOMContentLoaded', function() {
  const checkoutBtn = document.getElementById('checkout-btn');
  const ticketCountInput = document.getElementById('ticketCount');
  const eventTitle = document.getElementById('event-title');

  // Helper to get price from loaded event
  function getEventPrice() {
    return event ? event.price : 0;
  }

  // Format all money displays with commas
  function updateMoneyDisplays() {
    const price = getEventPrice();
    const count = parseInt(ticketCountInput.value, 10) || 1;
    document.getElementById('ticket-price').textContent = formatCurrency(price);
    document.getElementById('ticket-fee').textContent = '+ ' + formatCurrency(price * count * 0.05) + ' Fee';
    checkoutBtn.textContent = 'Check out for ' + formatCurrency(price * count * 1.05);
  }
  updateMoneyDisplays();

  // When ticket count changes, update money displays
  window.updateCount = function(change) {
    let value = parseInt(ticketCountInput.value);
    value = Math.max(1, value + change);
    ticketCountInput.value = value;
    updateMoneyDisplays();
  };

  // Modal logic
  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }
  window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Checkout button logic
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function(e) {
      const day = eventDaySelect.value;
      const seatType = seatTypeSelect.value;
      let extra = '';
      let price = event.price;
      if (event.seatTypes && event.seatTypes.length > 0) {
        const seatObj = event.seatTypes.find(s => s.type === seatType);
        price = seatObj ? seatObj.price : event.price;
      }
      // Use price for summary, etc.
      if (event.days && event.days.length > 1) extra += `<br>Day: <b>${new Date(day).toLocaleDateString()}</b>`;
      if (event.seatTypes && event.seatTypes.length > 0) extra += `<br>Seat Type: <b>${seatType}</b>`;
      if (selectedSeat) extra += `<br>Seat: <b>${selectedSeat}</b>`;
      document.getElementById('modal-event-title').innerHTML = document.getElementById('event-title').textContent + extra;
    });
  }

  // Confirm purchase logic
  const confirmBtn = document.getElementById('confirmPurchaseBtn');
  if (confirmBtn) {
    confirmBtn.onclick = function() {
      closeModal('confirmModal');
      setTimeout(() => openModal('thankYouModal'), 300);
    };
  }

  // Day Picker
  const dayPicker = document.getElementById('day-picker');
  const eventDaySelect = document.getElementById('event-day');
  if (event.days && event.days.length > 1) {
    dayPicker.style.display = '';
    event.days.forEach(day => {
      const opt = document.createElement('option');
      opt.value = day;
      opt.textContent = new Date(day).toLocaleDateString();
      eventDaySelect.appendChild(opt);
    });
  }

  const seatTypePicker = document.getElementById('seat-type-picker');
  const seatTypeSelect = document.getElementById('seat-type');
  if (event.seatTypes && event.seatTypes.length > 0) {
    seatTypePicker.style.display = '';
    event.seatTypes.forEach(seat => {
      const opt = document.createElement('option');
      opt.value = seat.type;
      opt.textContent = `${seat.type} (₱${seat.price.toLocaleString()})`;
      seatTypeSelect.appendChild(opt);
    });

    // Set initial price to first seat type
    function updateSeatTypePrice() {
      const selectedType = seatTypeSelect.value;
      const seatObj = event.seatTypes.find(s => s.type === selectedType);
      const price = seatObj ? seatObj.price : 0;
      const count = parseInt(ticketCountInput.value, 10) || 1;
      document.getElementById('ticket-fee').textContent = '+ ' + formatCurrency(price * count * 0.05) + ' Fee';
      checkoutBtn.textContent = 'Check out for ' + formatCurrency(price * count * 1.05);
    }
    seatTypeSelect.addEventListener('change', updateSeatTypePrice);
    ticketCountInput.addEventListener('change', updateSeatTypePrice);
    updateSeatTypePrice();
  }
  const seatMapDiv = document.getElementById('seat-map');
  const selectedSeatDiv = document.getElementById('selected-seat');
  let selectedSeat = null;

  function renderSeatMap() {
    seatMapDiv.innerHTML = '';
    selectedSeat = null;
    selectedSeatDiv.textContent = '';
    const day = eventDaySelect.value;
    const seatType = seatTypeSelect.value;
    if (!event.seatMap || !event.seatMap[seatType]) return;
    event.seatMap[seatType].forEach(seat => {
      const btn = document.createElement('button');
      btn.textContent = seat;
      const isOccupied = event.occupiedSeats
        && event.occupiedSeats[day]
        && event.occupiedSeats[day][seatType]
        && event.occupiedSeats[day][seatType].includes(seat);
      if (isOccupied) {
        btn.classList.add('occupied');
        btn.disabled = true;
      }
      btn.onclick = function() {
        seatMapDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSeat = seat;
        selectedSeatDiv.textContent = `Selected seat: ${seat}`;
      };
      seatMapDiv.appendChild(btn);
    });
    seatPicker.style.display = '';
  }

  // Show seat picker if seat types are available
  if (event.seatTypes && event.seatTypes.length > 0 && seatMapDiv) {
    seatPicker.style.display = '';
    // Initial render
    renderSeatMap();
    // Update seat map on day or seat type change
    eventDaySelect.addEventListener('change', renderSeatMap);
    seatTypeSelect.addEventListener('change', renderSeatMap);
  }
});

// Format currency with commas
function formatCurrency(amount) {
  return '₱' + amount.toLocaleString('en-US', {minimumFractionDigits: 2});
}