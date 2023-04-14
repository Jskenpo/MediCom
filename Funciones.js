const { pool } = require('./conexiones');

async function obtenerTop10EnfermedadesFallecidos() {
  const query = `
    select r.enfermedad_tratada, count(*) as pacientes_fallecidos from reporte_medico r
    join(
        select id_reporte_medico, status from historial
        where seguimiento = (select max(seguimiento) from historial h2 where h2.id_reporte_medico = historial.id_reporte_medico)
    ) h on r.id_reporte = h.id_reporte_medico
    where h.status = 'Muerto'
    group by r.enfermedad_tratada
    order by pacientes_fallecidos desc
    limit 10;
  `;
  
  const { rows } = await pool.query(query);
  
  return rows;
}// funciones.js

const { pool } = require('./conexiones');

async function obtenerTop10EnfermedadesFallecidos() {
  const query = `
    select r.enfermedad_tratada, count(*) as pacientes_fallecidos from reporte_medico r
    join(
        select id_reporte_medico, status from historial
        where seguimiento = (select max(seguimiento) from historial h2 where h2.id_reporte_medico = historial.id_reporte_medico)
    ) h on r.id_reporte = h.id_reporte_medico
    where h.status = 'Muerto'
    group by r.enfermedad_tratada
    order by pacientes_fallecidos desc
    limit 10;
  `;
  
  const { rows } = await pool.query(query);
  
  // Crear la tabla HTML con los resultados de la consulta
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');
  headerCell1.textContent = 'Enfermedad Tratada';
  headerCell2.textContent = 'Pacientes Fallecidos';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  table.appendChild(headerRow);
  
  for (const row of rows) {
    const dataRow = document.createElement('tr');
    const dataCell1 = document.createElement('td');
    const dataCell2 = document.createElement('td');
    dataCell1.textContent = row.enfermedad_tratada;
    dataCell2.textContent = row.pacientes_fallecidos;
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
    table.appendChild(dataRow);
  }

  // Insertar la tabla en el DOM
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);

  return rows;
}

module.exports = {
  obtenerTop10EnfermedadesFallecidos,
};


module.exports = {
  obtenerTop10EnfermedadesFallecidos,
};
