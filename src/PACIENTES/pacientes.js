const myTable = document.createElement('table');
myTable.id = 'TableInventario';

const searchInput = document.createElement('input');
searchInput.id = 'searchInput';

const searchContainer = document.querySelector('.search__container');
searchContainer.appendChild(searchInput);

document.body.appendChild(myTable);

fetch('http://3.22.74.121:3000/Paciente')
  .then(response => response.json())
  .then(data => {
    myTable.innerHTML = `
      <thead>
        <tr>
          <th>dpi</th>
          <th>Nombre</th>
          <th>direccion</th>
          <th>telefono</th>
          <th>altura</th>
          <th>masa_corporal</th>
          <th>peso</th>
          <th>enfermedades_herencia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(registro => `
          <tr>
            <td>${registro.dpi}</td>
            <td>${registro.nombre}</td>
            <td>${registro.direccion}</td>
            <td>${registro.telefono}</td>
            <td>${registro.altura}</td>
            <td>${registro.masa_corporal}</td>
            <td>${registro.peso}</td>
            <td>${registro.enfermedades_herencia}</td>
            <td><button onclick="window.location.href='Historial/historial.html?dpi=${registro.dpi}'">Ver más</button></td>
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
const myTable = document.createElement('table');
myTable.id = 'TableInventario';

const searchInput = document.createElement('input');
searchInput.id = 'searchInput';

const searchContainer = document.querySelector('.search__container');
searchContainer.appendChild(searchInput);

document.body.appendChild(myTable);

fetch('http://3.22.74.121:3000/Paciente')
  .then(response => response.json())
  .then(data => {
    myTable.innerHTML = `
      <thead>
        <tr>
          <th>dpi</th>
          <th>Nombre</th>
          <th>direccion</th>
          <th>telefono</th>
          <th>altura</th>
          <th>masa_corporal</th>
          <th>peso</th>
          <th>enfermedades_herencia</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(registro => `
          <tr>
          <td>${registro.dpi}</td>
          <td>${registro.nombre}</td>
          <td>${registro.direccion}</td>
          <td>${registro.telefono}</td>
          <td>${registro.altura}</td>
          <td>${registro.masa_corporal}</td>
          <td>${registro.peso}</td>
          <td>${registro.enfermedades_herencia}</td>
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
*/
