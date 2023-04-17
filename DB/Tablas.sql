create table paciente(
	dpi varchar(50) primary key,
	nombre varchar(50),
	direccion varchar(50),
	telefono varchar(50),
	altura varchar(50),
	masa_corporal varchar(50),
	peso varchar(50),
	enfermedades_herencia varchar(50)
);

create table centro_medico(
	id int primary key,
	nombre varchar(50),
	direccion varchar(50),
	telefono varchar(50)
);

create table inventario(
	id_centro_medico int,
	nombre_producto varchar(50),
	cantidad_producto int,
	capacidad_producto int,
	fecha_vencimiento date,
	foreign key (id_centro_medico) references centro_medico(id)
);

create table medico(
	num_colegiado varchar(50) primary key,
	nombre varchar(50),
	direccion varchar(50),
	telefono varchar(50),
	id_centro_medico int,
	especialidad varchar(50),
	contraseña varchar(50),
	foreign key (id_centro_medico) references centro_medico(id)
);

create table reporte_medico(
	id_reporte varchar(50) primary key,
	id_paciente varchar(50),
	id_medico varchar(50),
	enfermedad_tratada varchar(50),
	medicamento_suministrado varchar(50),
	examenes_realizados varchar(50),
	id_centro_medico int,
	foreign key (id_paciente) references paciente(dpi),
	foreign key (id_medico) references medico(num_colegiado),
	foreign key (id_centro_medico) references centro_medico(id)
);

create table historial(
	id_reporte_medico varchar(50),
	fecha date,
	hora varchar(50),
	seguimiento varchar(200),
	status varchar(200),
	primary key(id_reporte_medico, fecha),
	foreign key (id_reporte_medico) references reporte_medico(id_reporte)
);

