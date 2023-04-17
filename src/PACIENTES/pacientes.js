const myTable = document.getElementById('TablePacientes');

fetch('http://3.22.74.121:3000/Paciente')
  .then(response => response.json())
  .then(data => {
    myTable.querySelector('tbody').innerHTML = '';

    data.forEach(registro => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${registro.dpi}</td>
        <td>${registro.nombre}</td>
        <td>${registro.direccion}</td>
        <td>${registro.telefono}</td>
        <td>${registro.altura}</td>
        <td>${registro.masa_corporal}</td>
        <td>${registro.peso}</td>
        <td>${registro.enfermedades_herencia}</td>
      `;

      myTable.querySelector('tbody').appendChild(newRow);
    });
  })
  .catch(error => {
    // Maneja cualquier error que pueda ocurrir durante la solicitud
  });