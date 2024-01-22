// adminLogin.js

document.addEventListener("DOMContentLoaded", () => {
  const adminLoginForm = document.getElementById("adminLoginForm");

  adminLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get admin ID from the form
    const adminId = document.getElementById("adminId").value;

    // Add Admin login logic here
    console.log(`Admin ID: ${adminId}`);

    // Redirect to Admin Dashboard or perform additional logic
    // For now, let's redirect to the Admin Dashboard
    window.location.href = "adminDashboard.html";
  });
});
