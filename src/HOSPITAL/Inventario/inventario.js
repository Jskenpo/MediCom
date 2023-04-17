const myTable = document.getElementById('TableInventario');

fetch('http://3.22.74.121:3000/Inventario')
  .then(response => response.json())
  .then(data => {
    myTable.querySelector('tbody').innerHTML = '';

    data.forEach(registro => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${registro.id_centro_medico}</td>
        <td>${registro.nombre_producto}</td>
        <td>${registro.cantidad_producto}</td>
        <td>${registro.capacidad_producto}</td>
        <td>${registro.fecha_vencimiento}</td>
      `;

      myTable.querySelector('tbody').appendChild(newRow);
    });
  })
  .catch(error => {
  });