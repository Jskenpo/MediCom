const myTable = document.getElementById('TableHistorial');

fetch('http://3.22.74.121:3000/Historial')
  .then(response => response.json())
  .then(data => {
    myTable.querySelector('tbody').innerHTML = '';

    data.forEach(registro => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${registro.id_reporte_medico}</td>
        <td>${registro.fecha}</td>
        <td>${registro.hora}</td>
        <td>${registro.seguimiento}</td>
        <td>${registro.status}</td>
        `;

      myTable.querySelector('tbody').appendChild(newRow);
    });
  })
  .catch(error => {
  });