const bookings = [
    { id: 1, user: 'Honey', date: '2024-09-10', time: '10:00 AM', status: 'Pending', details: 'Birthday party, 50 guests, catering included.' },
    { id: 2, user: 'Mr.Singh', date: '2024-09-12', time: '1:00 PM', status: 'Pending', details: 'Corporate meeting, 20 attendees, audio equipment needed.' },
    { id: 3, user: 'Raj Kumar Rao', date: '2024-09-15', time: '6:00 PM', status: 'Pending', details: 'Wedding, 100 guests, full catering and photography.' },
  
];

// Populate booking table
function populateBookingList() {
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td onclick="viewBookingDetails(${booking.id})" style="cursor:pointer;color:blue;">${booking.user}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td><span class="status ${booking.status.toLowerCase()}">${booking.status}</span></td>
            <td>
                <button onclick="confirmAction(${booking.id}, 'accept')">Accept</button>
                <button class="reject" onclick="confirmAction(${booking.id}, 'reject')">Reject</button>
            </td>
        `;
        bookingList.appendChild(row);
    });
}

// View booking details in a modal
function viewBookingDetails(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <strong>User:</strong> ${booking.user}<br>
        <strong>Date:</strong> ${booking.date}<br>
        <strong>Time:</strong> ${booking.time}<br>
        <strong>Details:</strong> ${booking.details}
    `;
    document.getElementById('bookingModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Confirm action before accepting/rejecting
function confirmAction(bookingId, action) {
    const confirmation = confirm(`Are you sure you want to ${action} this booking?`);
    if (confirmation) {
        if (action === 'accept') {
            acceptBooking(bookingId);
        } else {
            rejectBooking(bookingId);
        }
    }
}

// Accept a booking
function acceptBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    booking.status = 'Accepted';
    alert(`Booking for ${booking.user} has been accepted.`);
    populateBookingList();
}

// Reject a booking
function rejectBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    booking.status = 'Rejected';
    alert(`Booking for ${booking.user} has been rejected.`);
    populateBookingList();
}

// Filter bookings by user name
function filterBookings() {
    const searchValue = document.getElementById('searchBooking').value.toLowerCase();
    const filteredBookings = bookings.filter(b => b.user.toLowerCase().includes(searchValue));
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    filteredBookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td onclick="viewBookingDetails(${booking.id})" style="cursor:pointer;color:blue;">{
                <td>${booking.user}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td><span class="status ${booking.status.toLowerCase()}">${booking.status}</span></td>
                <td>
                    <button onclick="confirmAction(${booking.id}, 'accept')">Accept</button>
                    <button class="reject" onclick="confirmAction(${booking.id}, 'reject')">Reject</button>
                </td>
            `;
            bookingList.appendChild(row);
        });
    }
    
    // Initial population of booking list when the page loads
   // Initial population of booking list when the page loads
populateBookingList();

// Get the elements for navigation links and sections
const manageBookingsLink = document.getElementById('manageBookingsLink');
const viewUsersLink = document.getElementById('viewUsersLink');
const manageServicesLink = document.getElementById('manageServicesLink');
const generateReportsLink = document.getElementById('generateReportsLink');

const manageBookingsSection = document.getElementById('manageBookingsSection');
const viewUsersSection = document.getElementById('viewUsersSection');
const manageServicesSection = document.getElementById('manageServicesSection');
const generateReportsSection = document.getElementById('generateReportsSection');

// Functions to toggle sections
manageBookingsLink.addEventListener('click', function() {
    manageBookingsSection.style.display = 'block';
    viewUsersSection.style.display = 'none';
    manageServicesSection.style.display = 'none';
    generateReportsSection.style.display = 'none';
});

viewUsersLink.addEventListener('click', function() {
    manageBookingsSection.style.display = 'none';
    viewUsersSection.style.display = 'block';
    manageServicesSection.style.display = 'none';
    generateReportsSection.style.display = 'none';
});

manageServicesLink.addEventListener('click', function() {
    manageBookingsSection.style.display = 'none';
    viewUsersSection.style.display = 'none';
    manageServicesSection.style.display = 'block';
    generateReportsSection.style.display = 'none';
});

generateReportsLink.addEventListener('click', function() {
    manageBookingsSection.style.display = 'none';
    viewUsersSection.style.display = 'none';
    manageServicesSection.style.display = 'none';
    generateReportsSection.style.display = 'block';
});
