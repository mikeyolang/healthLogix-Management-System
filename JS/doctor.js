document.addEventListener("DOMContentLoaded", () => {
  const doctorLoginForm = document.getElementById("doctorLoginForm");

  doctorLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get doctor ID and hospital from the form
    const doctorId = document.getElementById("doctorId").value;
    const selectedHospital = document.getElementById("hospital").value;

    // Add Doctor login logic here
    console.log(`Doctor ID: ${doctorId}, Hospital: ${selectedHospital}`);

    // Redirect to Doctor Dashboard or perform additional logic
    // For now, let's redirect to the Doctor Dashboard
    window.location.href = "doctorDashboard.html";
  });
});
