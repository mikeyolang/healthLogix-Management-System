// Example admin data
const adminData = {
  id: 1,
  username: "Amdmin",
  name: "Super Admin",
  role: "Super Admin",
};

document.addEventListener("DOMContentLoaded", async function () {
  // Display admin profile information
  displayAdminProfile();

  // Fetch and display statistics
  await displayStatistics();
});

// async function displayAdminProfile() {
//   const header = document.querySelector("header");
//   header.innerHTML += `<h2>${adminData.name}</h2>`;
// }

async function displayStatistics() {
  const departmentsCount = await getDepartmentsCount();
  const doctorsCount = await getDoctorsCount();
  const patientsCount = await getPatientsCount();
  const appointmentsCount = await getAppointmentsCount();

  // Update card information
  const departmentsCard = document.querySelector(".cards .card:nth-child(1) p");
  const doctorsCard = document.querySelector(".cards .card:nth-child(2) p");
  const patientsCard = document.querySelector(".cards .card:nth-child(3) p");

  departmentsCard.textContent = departmentsCount;
  doctorsCard.textContent = doctorsCount;
  patientsCard.textContent = patientsCount;

  // Update table information (adding more dummy data)
  const tableBody = document.querySelector(".table tbody");
  const dummyData = [
    { patient: "Salim", prescription: "-", doctor: "-", date: "-" },
    { patient: "John", prescription: "-", doctor: "-", date: "-" },
    { patient: "Mary", prescription: "-", doctor: "-", date: "-" },
  ];

  dummyData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${data.patient}</td><td>${data.prescription}</td><td>${data.doctor}</td><td>${data.date}</td>`;
    tableBody.appendChild(row);
  });
}

// Example functions to fetch data from backend
async function getDepartmentsCount() {
  // Replace with actual logic to fetch departments count from backend
  return 14;
}

async function getDoctorsCount() {
  // Replace with actual logic to fetch doctors count from backend
  return 8;
}

async function getPatientsCount() {
  // Replace with actual logic to fetch patients count from backend
  return 1;
}

async function getAppointmentsCount() {
  // Replace with actual logic to fetch appointments count from backend
  return 0;
}

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
