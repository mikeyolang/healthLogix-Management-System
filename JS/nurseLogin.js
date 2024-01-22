// nurseLogin.js

document.addEventListener("DOMContentLoaded", () => {
  const nurseLoginForm = document.getElementById("nurseLoginForm");

  nurseLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get nurse number and hospital from the form
    const nurseNumber = document.getElementById("nurseNumber").value;
    const selectedHospital = document.getElementById("hospital").value;

    // Add Nurse login logic here
    console.log(`Nurse Number: ${nurseNumber}, Hospital: ${selectedHospital}`);

    // Redirect to Nurse Dashboard or perform additional logic
    // You can use window.location.href or a framework for navigation
    // For now, let's redirect to the Nurse Dashboard
    window.location.href = "nurseDashboard.html";
  });
});
