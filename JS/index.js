// index.js

function login(userType) {
  // Navigate to the respective login page or handle login logic based on userType
  switch (userType) {
    case "nurse":
      // Handle nurse login logic or navigate to nurse login page
      navigateToNurseLogin();
      break;
    case "doctor":
      // Handle doctor login logic or navigate to doctor login page
      navigateToDoctorLogin();
      break;
    case "admin":
      // Handle admin login logic or navigate to admin login page
      navigateToAdminLogin();
      break;
    default:
      console.error("Invalid user type");
  }
}

function navigateToNurseLogin() {
  // Redirect to Nurse login page
  window.location.href = "nurseLogin.html";
}
function navigateToDoctorLogin() {
  // Redirect to Doctor login page
  window.location.href = "doctorLogin.html";
}
function navigateToAdminLogin() {
  // Redirect to Doctor login page
  window.location.href = "adminLogin.html";
}
