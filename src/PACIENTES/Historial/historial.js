const params = new URLSearchParams(window.location.search);
const dpi = params.get('dpi');


fetch(`http://3.22.74.121:3000/Paciente/${dpi}`)
  .then(response => response.json())
  .then(data => {
    const paciente = data[0];
    const divInformacion = document.getElementById("Informacion_paciente");
    const Nombre_paciente = document.getElementById("Nombre_paciente");

    Nombre_paciente.innerHTML = `
      <h2>${paciente.nombre}</h2>`;

    divInformacion.innerHTML = `
      <p><strong>Dirección:</strong> ${paciente.direccion}</p>
      <p><strong>Teléfono:</strong> ${paciente.telefono}</p>
      <p><strong>Altura:</strong> ${paciente.altura}</p>
      <p><strong>Masa corporal:</strong> ${paciente.masa_corporal}</p>
      <p><strong>Peso:</strong> ${paciente.peso}</p>
      <p><strong>Enfermedades hereditarias:</strong> ${paciente.enfermedades_herencia}</p>
    `;
  })
  .catch(error => {
    console.error(error);
  });


  fetch(`http://3.22.74.121:3000/HistorialMod/${dpi}`)
  .then(response => response.json())
  .then(data => {
    const paciente = data[0];
    const divInformacion_1 = document.getElementById("id_reporte_medico");

    divInformacion_1.innerHTML = `
      <p><strong>Id_reporte_medico:</strong> ${paciente.id_reporte_medico}</p>
    `;
  })
  .catch(error => {
    console.error(error);
  });






  const informacionHistorial = document.getElementById('informacion_historial');

  const myTable = document.createElement('table');
  myTable.id = 'TableInventario';
  
  informacionHistorial.appendChild(myTable);
  
  fetch(`http://3.22.74.121:3000/HistorialMod/${dpi}`)
    .then(response => response.json())
    .then(data => {
      myTable.innerHTML = `
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Seguimiento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(registro => `
            <tr>
              <td>${registro.fecha}</td>
              <td>${registro.hora}</td>
              <td>${registro.seguimiento}</td>
              <td>${registro.status}</td>
            </tr>
          `).join('')}
        </tbody>
      `;
    })
    .catch(error => {
      console.error(error);
    });

    function enviarFormulario(formId) {
      const form = document.getElementById(formId);
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const body = {};
        formData.forEach((value, key) => body[key] = value);
        const response = await fetch('http://3.22.74.121:3000/Historial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(data);
        form.reset();
        alert('Los datos se han enviado correctamente');
      });
    }
    