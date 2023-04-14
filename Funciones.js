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
}

module.exports = {
  obtenerTop10EnfermedadesFallecidos,
};
