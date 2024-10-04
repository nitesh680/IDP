document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const userId = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check credentials
    if (userId === '8102897545' && password === 'honey') {
        // Redirect to admin dashboard (replace 'admin-dashboard.html' with the actual admin page URL)
        window.location.href = 'admin.html';
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid user ID or password. Please try again.';
    }
});