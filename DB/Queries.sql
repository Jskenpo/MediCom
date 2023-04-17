/* tablas */
select * from centro_medico
select * from historial
select * from inventario
select * from medico
select * from paciente
select * from reporte_medico

/* 1. El top 10 las enfermedades más mortales */
select r.enfermedad_tratada, count(*) as pacientes_fallecidos from reporte_medico r
join(
    select id_reporte_medico, status from historial
    where seguimiento = (select max(seguimiento) from historial h2 where h2.id_reporte_medico = historial.id_reporte_medico)
) h on r.id_reporte = h.id_reporte_medico
where h.status = 'Muerto'
group by r.enfermedad_tratada
order by pacientes_fallecidos desc
limit 10

/* 2. Top 10 de los médicos que más pacientes han atendido */
select medico.num_colegiado, medico.nombre, count(reporte_medico.id_medico) as pacientes_atendidos from medico
join reporte_medico
on medico.num_colegiado = reporte_medico.id_medico
group by medico.num_colegiado, medico.nombre
order by pacientes_atendidos desc 
limit 10

/* 3. El top 5 de los pacientes con más asistencias a alguna unidad de salud y que debe de incluir su información general */
select paciente.nombre, count(historial.id_reporte_medico) as asistencias_centros_medicos, paciente.peso, paciente.altura, paciente.masa_corporal from paciente
join reporte_medico
on paciente.dpi = reporte_medico.id_paciente
join historial
on historial.id_reporte_medico = reporte_medico.id_reporte
group by paciente.nombre, paciente.peso, paciente.altura, paciente.masa_corporal
order by asistencias_centros_medicos desc
limit 5

/* 4. Reporte mensual por unidad médica de las medicinas o suministros que están a punto de terminarse */
select inventario.nombre_producto, centro_medico.nombre , inventario.cantidad_producto, inventario.capacidad_producto, 
cast(inventario.cantidad_producto as float)/cast(inventario.capacidad_producto as float) * 100 as porcentaje_disponible 
from inventario
join centro_medico 
on inventario.id_centro_medico = centro_medico.id
where inventario.cantidad_producto <= 0.15 * inventario.capacidad_producto
order by porcentaje_disponible desc

/* 5. Reporte de los 3 hospitales, centros de salud y clínicas que más pacientes atienden. */
select centro_medico.nombre, count(reporte_medico.id_centro_medico) as pacientes_atendidos from centro_medico
join reporte_medico
on centro_medico.id = reporte_medico.id_centro_medico
group by centro_medico.nombre
order by pacientes_atendidos desc
limit 3

/* Búsqueda mensual de los medicamentos que están por vencer y/o por terminarse */
select inventario.nombre_producto, centro_medico.nombre , inventario.cantidad_producto, inventario.capacidad_producto, 
cast(inventario.cantidad_producto as float)/cast(inventario.capacidad_producto as float) * 100 as porcentaje_disponible,
inventario.fecha_vencimiento
from inventario
join centro_medico on inventario.id_centro_medico = centro_medico.id
where inventario.cantidad_producto <= 0.15 * inventario.capacidad_producto
or inventario.fecha_vencimiento <= current_date + interval '30 days'
order by inventario.fecha_vencimiento asc

/* Acceso inmediato del expediente del paciente */
select * from reporte_medico
select * from historial
