// funciones.js

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

async function obtenerTop10MedicosAtendidos() {
    const query = `
      select medico.num_colegiado, medico.nombre, count(reporte_medico.id_medico) as pacientes_atendidos from medico
      join reporte_medico
      on medico.num_colegiado = reporte_medico.id_medico
      group by medico.num_colegiado, medico.nombre
      order by pacientes_atendidos desc 
      limit 10;
    `;
    
    const { rows } = await pool.query(query);
    
    // Crear la tabla HTML con los resultados de la consulta
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    const headerCell2 = document.createElement('th');
    const headerCell3 = document.createElement('th');
    headerCell1.textContent = 'Num. Colegiado';
    headerCell2.textContent = 'Nombre del Médico';
    headerCell3.textContent = 'Pacientes Atendidos';
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);
    
    for (const row of rows) {
      const dataRow = document.createElement('tr');
      const dataCell1 = document.createElement('td');
      const dataCell2 = document.createElement('td');
      const dataCell3 = document.createElement('td');
      dataCell1.textContent = row.num_colegiado;
      dataCell2.textContent = row.nombre;
      dataCell3.textContent = row.pacientes_atendidos;
      dataRow.appendChild(dataCell1);
      dataRow.appendChild(dataCell2);
      dataRow.appendChild(dataCell3);
      table.appendChild(dataRow);
    }
  
    // Insertar la tabla en el DOM
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  
    return rows;
  }
  
async function obtenerTop5PacientesAsistenciaCentrosMedicos() {
  const query = `
    select paciente.nombre, count(historial.id_reporte_medico) as asistencias_centros_medicos, paciente.peso, paciente.altura, paciente.masa_corporal from paciente
    join reporte_medico
    on paciente.dpi = reporte_medico.id_paciente
    join historial
    on historial.id_reporte_medico = reporte_medico.id_reporte
    group by paciente.nombre, paciente.peso, paciente.altura, paciente.masa_corporal
    order by asistencias_centros_medicos desc
    limit 5;
  `;

  const { rows } = await pool.query(query);

  // Crear la tabla HTML con los resultados de la consulta
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');
  const headerCell3 = document.createElement('th');
  const headerCell4 = document.createElement('th');
  const headerCell5 = document.createElement('th');
  headerCell1.textContent = 'Nombre del Paciente';
  headerCell2.textContent = 'Asistencias a Centros Médicos';
  headerCell3.textContent = 'Peso';
  headerCell4.textContent = 'Altura';
  headerCell5.textContent = 'Masa Corporal';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  headerRow.appendChild(headerCell5);
  table.appendChild(headerRow);

  for (const row of rows) {
    const dataRow = document.createElement('tr');
    const dataCell1 = document.createElement('td');
    const dataCell2 = document.createElement('td');
    const dataCell3 = document.createElement('td');
    const dataCell4 = document.createElement('td');
    const dataCell5 = document.createElement('td');
    dataCell1.textContent = row.nombre;
    dataCell2.textContent = row.asistencias_centros_medicos;
    dataCell3.textContent = row.peso;
    dataCell4.textContent = row.altura;
    dataCell5.textContent = row.masa_corporal;
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
    dataRow.appendChild(dataCell3);
    dataRow.appendChild(dataCell4);
    dataRow.appendChild(dataCell5);
    table.appendChild(dataRow);
  }

  // Insertar la tabla en el DOM
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);

  return rows;
}
  
  async function reporteMensualMedica() {
    const query = `
    SELECT
      inventario.nombre_producto,
      centro_medico.nombre,
      inventario.cantidad_producto,
      inventario.capacidad_producto,
      CAST(inventario.cantidad_producto AS float) / CAST(inventario.capacidad_producto AS float) * 100 AS porcentaje_disponible,
      inventario.fecha_vencimiento
    FROM
      inventario
      JOIN centro_medico ON inventario.id_centro_medico = centro_medico.id
    WHERE
      inventario.cantidad_producto <= 0.2 * inventario.capacidad_producto AND
      inventario.fecha_vencimiento <= DATE_ADD(CURDATE(), INTERVAL 30 DAY)
    ORDER BY
      porcentaje_disponible DESC
  `;

    const { rows } = await pool.query(query);
    
    // Crear la tabla HTML con los resultados de la consulta
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    const headerCell2 = document.createElement('th');
    const headerCell3 = document.createElement('th');
    const headerCell4 = document.createElement('th');
    const headerCell5 = document.createElement('th');
    const headerCell6 = document.createElement('th');
    headerCell1.textContent = 'Nombre del Producto';
    headerCell2.textContent = 'Centro Médico';
    headerCell3.textContent = 'Cantidad de Producto';
    headerCell4.textContent = 'Capacidad de Producto';
    headerCell5.textContent = 'Porcentaje Disponible';
    headerCell6.textContent = 'Fecha de Vencimiento';
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    headerRow.appendChild(headerCell4);
    headerRow.appendChild(headerCell5);
    headerRow.appendChild(headerCell6);
    table.appendChild(headerRow);

    for (const row of rows) {
        const dataRow = document.createElement('tr');
        const dataCell1 = document.createElement('td');
        const dataCell2 = document.createElement('td');
        const dataCell3 = document.createElement('td');
        const dataCell4 = document.createElement('td');
        const dataCell5 = document.createElement('td');
        dataCell1.textContent = row.nombre_producto;
        dataCell2.textContent = row.nombre;
        dataCell3.textContent = row.cantidad_producto;
        dataCell4.textContent = row.capacidad_producto;
        dataCell5.textContent = row.fecha_vencimiento;
        dataRow.appendChild(dataCell1);
        dataRow.appendChild(dataCell2);
        dataRow.appendChild(dataCell3);
        dataRow.appendChild(dataCell4);
        dataRow.appendChild(dataCell5);
        table.appendChild(dataRow);
    }

    // Insertar la tabla en el DOM
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);

    return rows;
}
 

async function obtenerTopCentrosAtendidos() {
  const query = `
    select centro_medico.nombre, count(reporte_medico.id_centro_medico) as pacientes_atendidos from centro_medico
    join reporte_medico
    on centro_medico.id = reporte_medico.id_centro_medico
    group by centro_medico.nombre
    order by pacientes_atendidos desc
    limit 3
  `;
  
  const { rows } = await pool.query(query);
  
  // Crear la tabla HTML con los resultados de la consulta
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');
  headerCell1.textContent = 'Centro Médico';
  headerCell2.textContent = 'Pacientes Atendidos';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  table.appendChild(headerRow);
  
  for (const row of rows) {
    const dataRow = document.createElement('tr');
    const dataCell1 = document.createElement('td');
    const dataCell2 = document.createElement('td');
    dataCell1.textContent = row.nombre;
    dataCell2.textContent = row.pacientes_atendidos;
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

async function obtenerProductosVencidosOCasiAgotados() {
  const query = `
    select inventario.nombre_producto, centro_medico.nombre , inventario.cantidad_producto, inventario.capacidad_producto, 
    cast(inventario.cantidad_producto as float)/cast(inventario.capacidad_producto as float) * 100 as porcentaje_disponible,
    inventario.fecha_vencimiento
    from inventario
    join centro_medico on inventario.id_centro_medico = centro_medico.id
    where inventario.cantidad_producto <= 0.15 * inventario.capacidad_producto
    or inventario.fecha_vencimiento <= current_date + interval '30 days'
    order by inventario.fecha_vencimiento asc
  `;

  const { rows } = await pool.query(query);

  // Crear la tabla HTML con los resultados de la consulta
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');
  const headerCell3 = document.createElement('th');
  const headerCell4 = document.createElement('th');
  const headerCell5 = document.createElement('th');
  const headerCell6 = document.createElement('th');
  headerCell1.textContent = 'Nombre Producto';
  headerCell2.textContent = 'Nombre Centro Médico';
  headerCell3.textContent = 'Cantidad Producto';
  headerCell4.textContent = 'Capacidad Producto';
  headerCell5.textContent = '% Disponible';
  headerCell6.textContent = 'Fecha de Vencimiento';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  headerRow.appendChild(headerCell5);
  headerRow.appendChild(headerCell6);
  table.appendChild(headerRow);

  for (const row of rows) {
    const dataRow = document.createElement('tr');
    const dataCell1 = document.createElement('td');
    const dataCell2 = document.createElement('td');
    const dataCell3 = document.createElement('td');
    const dataCell4 = document.createElement('td');
    const dataCell5 = document.createElement('td');
    const dataCell6 = document.createElement('td');
    dataCell1.textContent = row.nombre_producto;
    dataCell2.textContent = row.nombre;
    dataCell3.textContent = row.cantidad_producto;
    dataCell4.textContent = row.capacidad_producto;
    dataCell5.textContent = row.porcentaje_disponible.toFixed(2) + '%';
    dataCell6.textContent = row.fecha_vencimiento;
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
    dataRow.appendChild(dataCell3);
    dataRow.appendChild(dataCell4);
    dataRow.appendChild(dataCell5);
    dataRow.appendChild(dataCell6);
    table.appendChild(dataRow);
  }

  // Insertar la tabla en el DOM
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);

  return rows;
}

async function obtenerReporteMedico(id) {
  const query = `
    select * from reporte_medico
    where id = $1;
  `;
  
  const values = [id];

  const { rows } = await pool.query(query, values);
  return rows;
}

async function obtenerHistorialPorIdReporte(id_reporte) {
  const query = `
    SELECT * FROM historial
    WHERE id_reporte_medico = $1;
  `;
  
  const values = [id_reporte];

  const { rows } = await pool.query(query, values);
  return rows;
}


module.exports = {
  obtenerTop10EnfermedadesFallecidos,
  obtenerTop10MedicosAtendidos,
  obtenerTop5PacientesAsistenciaCentrosMedicos,
  reporteMensualMedica,
  obtenerTopCentrosAtendidos,
  obtenerProductosVencidosOCasiAgotados,
  obtenerReporteMedico,
  obtenerHistorialPorIdReporte
};

