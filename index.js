function salvarContato() {
  const nameNew = document.getElementById("nome").value;
  const telNew = document.getElementById("number").value;

  const table = document.getElementById("contatosTbody");
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerHTML = nameNew;
  cell2.innerHTML = telNew;

  document.getElementById("nome").value = "";
  document.getElementById("number").value = "";
}
