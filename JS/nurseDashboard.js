// nurseDashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // You can add logic here to fetch and display nurse details, patients, etc.

  // Sample logout function
  function logout() {
    // Add logout logic here (e.g., clearing session, redirecting to login page)
    alert("Logged out successfully");
    window.location.href = "index.html";
  }

  // Assign the logout function to the window for access in the HTML
  window.logout = logout;
});