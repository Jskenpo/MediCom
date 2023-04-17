const myTable = document.createElement('table');
myTable.id = 'TableInventario';

const searchInput = document.createElement('input');
searchInput.id = 'searchInput';

const searchContainer = document.querySelector('.search__container');
searchContainer.appendChild(searchInput);

document.body.appendChild(myTable);

fetch('http://3.22.74.121:3000/Inventario')
  .then(response => response.json())
  .then(data => {
    myTable.innerHTML = `
      <thead>
        <tr>
          <th>ID Centro Medico</th>
          <th>Nombre Producto</th>
          <th>Cantidad Producto</th>
          <th>Capacidad Producto</th>
          <th>Fecha Vencimiento</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(registro => `
          <tr>
            <td>${registro.id_centro_medico}</td>
            <td>${registro.nombre_producto}</td>
            <td>${registro.cantidad_producto}</td>
            <td>${registro.capacidad_producto}</td>
            <td>${registro.fecha_vencimiento}</td>
          </tr>
        `).join('')}
      </tbody>
    `;

    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase();
      const rows = myTable.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const idCentroMedico = row.querySelector('td:first-child').textContent.toLowerCase();
        if (idCentroMedico.includes(searchText)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  })
  .catch(error => {
    console.error(error);
  });

























/*
const myTable = document.getElementById('TableInventario');
const searchInput = document.getElementById('searchInput');

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
*/