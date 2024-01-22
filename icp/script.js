function addPatient() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var condition = document.getElementById("condition").value;

  var table = document
    .getElementById("patientTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = condition;

  // Clear the form after adding a patient
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("condition").value = "";
}
