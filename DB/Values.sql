insert into paciente(dpi, nombre, direccion, telefono, altura, masa_corporal, peso, enfermedades_herencia)
values(123450101, 'Sebastian Solorzano', '2a calle', '42180452', '177', '28.7', '90', 'Arritmias'),
(234560101, 'Manuel Rodas', '3a calle', '51278345', '182', '24.2', '80', 'Miopia'),
(345670101, 'Jose Santisteban', '4a calle', '41610384', '190', '24.9', '90', ''),
(456780101, 'Diego Valdez', '5a calle', '55562312', '174', '21.2', '65', 'Daltonismo'),
(567890101, 'Sebastian Estrada', '6a calle', '41669282', '177', '27.1', '85', ''),
(678900101, 'Daniela Cabrera', '7a calle', '30118811', '170', '22.5', '65', 'Astigmatismo'),
(112340101, 'Alessandro Di Paolo', '8a calle', '59457894', '182', '24.2', '80', ''),
(102340101, 'Ian Farrington', '9a calle', '30201799', '177', '20.7', '65', ''),
(134560101, 'Jimena Juarez', '10a calle', '30041833', '170', '22.5', '65', 'Fenilcetonuria'),
(145670101, 'Sebastian Sequeira', '11a calle', '37037018', '175', '21.2', '65', 'Diabetes'),
(156780101, 'Hans Arellano', '12a calle', '47839802', '175', '19.6', '60', ''),
(167890101, 'Daniel Garcia', '13a calle', '53785693', '175', '19.6', '60', ''),
(178900101, 'Cesilia Lee', '14a calle', '57469821', '165', '22.0', '60', ''),
(111230101, 'Oscar Orozco', '15a calle', '56473974', '173', '23.4', '70', 'Diabetes'),
(110230101, 'Javier Mancilla', '16a calle', '31289473', '177', '23.9', '75', '');

select * from paciente

insert into centro_medico(id, nombre, direccion, telefono)
values(1011, 'Hospital Roosevelt', 'Calzada Roosevelt, Cdad. de Guatemala', '23217400'),
(1012, 'Hospital San Juan de Dios', '1ra Avenida "A" 10-50, Cdad. de Guatemala', '23219191'),
(1013, 'Hospital El Pilar', '3A Calle 10-17, Cdad. de Guatemala', '22795000'),
(1014, 'Centro Médico', ' 6A Avenida 3-47, Cdad. de Guatemala', '23194600'),
(1015, 'Hospital Herrera Llerandi', '6A Avenida 8-71, Cdad. de Guatemala', '23845959'),
(1016, 'Medika 10', 'Ciudad de, 6A Avenida 04-01, Cdad. de Guatemala', '24618484'),
(1017, 'Edificio Sixtino 1', '6A Avenida 6-63, Cdad. de Guatemala', '22777686');

select * from centro_medico

insert into medico(num_colegiado, nombre, direccion, telefono, id_centro_medico, especialidad, contraseña)
values('10112002', 'Jose Perez', '2a calle', '42180452', 1011, 'Ofmatologo', '10112002.1'),
('11212002', 'Salvador Gordillo', '3a calle', '51278345', 1011, 'Cardiologo', '11212002.1'),
('12312002', 'Pablo Vargas', '4a calle', '41610384', 1012, 'Cirujano', '12312002.1'),
('13412002', 'Jose Soto', '5a calle', '55562312', 1012, 'Dermatologo', '13412002.1'),
('14512002', 'Sebastian Tuch', '6a calle', '41669282', 1013, 'Ginecologo', '14512002.1'),
('15612002', 'Maria Porras', '7a calle', '30118811', 1013, 'Neumologo', '15612002.1'),
('16712002', 'Jose de la Rosa', '8a calle', '59457894', 1014, 'Otorrinolaringólogo', '16712002.1'),
('17812002', 'Thomas Gomez', '9a calle', '30201799', 1014, 'Pedriatra', '17812002.1'),
('18912002', 'Maria Medal', '10a calle', '30041833', 1015, 'Psiquiatra', '18912002.1'),
('19012002', 'Sebastian Aragon', '11a calle', '37037018', 1015, 'Urologo', '19012002.1'),
('20112002', 'Antonio Sagastume', '13a calle', '53785693', 1016, 'Cirujano', '20112002.1'),
('21212002', 'Linda Soto', '14a calle', '57469821', 1016, 'Cardiologo', '21212002.1'),
('22312002', 'Rodolfo Rodriguez', '15a calle', '56473974', 1017, 'Ofmatologo', '22312002.1'),
('23412002', 'Alejandro Rodriguez', '16a calle', '31289473', 1017, 'Neumologo', '23412002.1'),
('24512002', 'Luis Gonzales', '12a calle', '47839802', 1017, 'Cardiologo', '24512002.1');

select * from medico

insert into inventario(id_centro_medico, nombre_producto, cantidad_producto, capacidad_producto, fecha_vencimiento)
values(1011, 'Vendas', '132', '250', date'2023-04-20'),
(1011, 'Jeringas', '90', '400', date'2023-05-31'),
(1011, 'Guantes', '256', '300', date'2023-08-15'),
(1011, 'Gasas', '178', '250', date'2023-11-01'),
(1011, 'Analgesicos', '112', '800', date'2023-04-30'),
(1011, 'Antibioticos', '34', '800', date'2023-04-30'),
(1011, 'Alcohol', '22', '100', date'2023-05-15'),
(1012, 'Vendas', '159', '300', date'2023-05-25'),
(1012, 'Jeringas', '210', '350', date'2023-07-01'),
(1012, 'Guantes', '453', '500', date'2023-09-05'),
(1012, 'Gasas', '36', '250', date'2023-11-21'),
(1012, 'Analgesicos', '786', '1000', date'2023-07-30'),
(1012, 'Antibioticos', '590', '1000', date'2023-07-30'),
(1012, 'Alcohol', '78', '150', date'2023-10-25'),
(1013, 'Vendas', '68', '200', date'2023-04-30'),
(1013, 'Jeringas', '270', '400', date'2023-04-30'),
(1013, 'Guantes', '127', '500', date'2023-06-15'),
(1013, 'Gasas', '235', '400', date'2023-04-25'),
(1013, 'Analgesicos', '528', '900', date'2023-06-30'),
(1013, 'Antibioticos', '765', '900', date'2023-06-30'),
(1013, 'Alcohol', '122', '200', date'2023-06-15'),
(1014, 'Vendas', '48', '200', date'2023-05-01'),
(1014, 'Jeringas', '415', '450', date'2023-05-01'),
(1014, 'Guantes', '256', '350', date'2023-10-25'),
(1014, 'Gasas', '78', '250', date'2023-08-01'),
(1014, 'Analgesicos', '789', '800', date'2023-05-10'),
(1014, 'Antibioticos', '760', '800', date'2023-05-10'),
(1014, 'Alcohol', '132', '150', date'2023-05-30'),
(1015, 'Vendas', '132', '250', date'2023-04-20'),
(1015, 'Jeringas', '90', '400', date'2023-05-31'),
(1015, 'Guantes', '256', '300', date'2023-08-15'),
(1015, 'Gasas', '178', '250', date'2023-11-01'),
(1015, 'Analgesicos', '112', '800', date'2023-04-30'),
(1015, 'Antibioticos', '34', '800', date'2023-04-30'),
(1015, 'Alcohol', '22', '100', date'2023-05-15'),
(1016, 'Vendas', '278', '450', date'2023-05-10'),
(1016, 'Jeringas', '390', '530', date'2023-04-20'),
(1016, 'Guantes', '356', '500', date'2023-07-15'),
(1016, 'Gasas', '378', '450', date'2023-11-01'),
(1016, 'Analgesicos', '765', '1200', date'2023-07-30'),
(1016, 'Antibioticos', '854', '1200', date'2023-07-30'),
(1016, 'Alcohol', '222', '300', date'2023-04-25'),
(1017, 'Vendas', '48', '200', date'2023-05-01'),
(1017, 'Jeringas', '415', '450', date'2023-05-01'),
(1017, 'Guantes', '256', '350', date'2023-10-25'),
(1017, 'Gasas', '78', '250', date'2023-08-01'),
(1017, 'Analgesicos', '789', '800', date'2023-05-10'),
(1017, 'Antibioticos', '760', '800', date'2023-05-10'),
(1017, 'Alcohol', '132', '150', date'2023-05-30');

select * from inventario

insert into reporte_medico(id_reporte, id_paciente, id_medico, enfermedad_tratada, medicamento_suministrado, examenes_realizados, id_centro_medico)
values('1111', '123450101', '11212002', 'Arritmia', 'Corentel 5', 'Electrocardiograma', 1017),
('2222', '234560101', '10112002', 'Miopia', 'Atropina', 'Examen de la agudeza visual', 1016),
('3333', '345670101', '16712002', 'Sinusitis', 'Aerosol nasal de solución salina', 'Endoscopia nasal', 1011),
('4444', '456780101', '21212002', 'Arritmia', 'Bisoprolol', 'Electrocardiograma', 1017),
('5555', '567890101', '17812002', 'Varicela', 'Acetaminofen', 'Muestra de sangre', 1012),
('6666', '678900101', '14512002', 'Adenomiosis', 'Ecografía, Resonancia magnética', 'Ibuprofeno', 1015),
('7777', '112340101', '22312002', 'Astigmatismo', 'Atropina', 'Examen de la agudeza visual', 1017),
('8888', '102340101', '17812002', 'Varicela', 'Acetaminofen', 'Muestra de sangre', 1012),
('9999', '134560101', '20112002', 'Fenilcetonuria', 'Sapropterina', 'Muestra de sangre', 1013),
('11111', '145670101', '12312002', 'Diabetes', 'Glucophage, Fortamet', 'Glucosa en sangre', 1014),
('22222', '156780101', '23412002', 'Bronquitis', 'Levofloxacina', 'Radiografía de torax', 1011),
('33333', '167890101', '15612002', 'Asma bronquial', 'Albuterol, Terbutalina', 'Espirometria', 1012),
('44444', '178900101', '14512002', 'Quistes de ovario', 'Ecografía, Resonancia magnética', 'Pildoras anticonceptivas', 1015),
('55555', '111230101', '12312002', 'Diabetes', 'Metformina, Glumetza', 'Glucosa en sangre', 1014),
('66666', '110230101', '23412002', 'Neumonía', 'Azitromicina', 'Radiografía de torax', 1011);

select * from reporte_medico

insert into historial(id_reporte_medico, fecha, hora, seguimiento, status)
values('1111', date'2023-02-12', '10:00', 'Despues de analizar la situacion de mareos y dolor en el pecho se detecto arritmia', 'Enfermo'),
('2222', date'2023-01-10', '12:00', 'Al realizar los examenes de la aguedeza visual se detecto miopia en el paciente', 'Enfermo'),
('3333', date'2023-02-28', '16:00', 'Despues de realizar los examenes se detecto sinusitis', 'Enfermo'),
('4444', date'2023-02-15', '14:00', 'Al realizar el electrocardiograma se detecto arritmia', 'Enfermo'),
('5555', date'2023-01-26', '12:00', 'Despues de realizar los examenes en la sangre se detecto varicela', 'Enfermo'),
('6666', date'2023-01-19', '12:00', 'Despues de realizar la ecografia se detecto adenomiosis', 'Enfermo'),
('7777', date'2023-03-23', '15:00', 'Al realizar los examenes de la aguedeza visual se detecto astigmatismo en el paciente', 'Enfermo'),
('8888', date'2023-03-20', '16:00', 'Despues de realizar los examenes en la sangre se detecto varicela', 'Enfermo'),
('9999', date'2023-01-14', '10:00', 'Despues de realizar los examenes en la sangre se detecto fenilcetonuria', 'Enfermo'),
('11111', date'2023-01-30', '14:00', 'Despues de realizar el examen de glucosa en la sangre se detecto diabetes', 'Enfermo'),
('22222', date'2023-03-01', '12:00', 'Despues de realizar la radiografia de torax se detecto bronquitis', 'Enfermo'),
('33333', date'2023-03-12', '14:00', 'Despues de realizar la espirometria se detecto asma bronquial', 'Enfermo'),
('44444', date'2023-02-21', '10:00', 'Despues de realizar la ecografia se detectaron quistes de ovario', 'Enfermo'),
('55555', date'2023-02-10', '09:00', 'Despues de realizar el examen de glucosa en la sangre se detecto diabetes', 'Enfermo'),
('66666', date'2023-03-31', '12:00', 'Despues de realizar la radiografia de torax se detecto neumonia', 'Enfermo');

select * from historial
