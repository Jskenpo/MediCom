window.onload = () => {
    getEnfermedadesFallecidos();
    getPacientesAtendidos();
    getPacientesAsistencia();
    getReporteMensual();
    getCentrosMedicos();
    getSuministros();
};

function getEnfermedadesFallecidos() {
    fetch("http://3.22.74.121:3000/Fallecidos")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const fallecidosContainer = document.querySelector('.Respuesta_enfermedades');

            const FallecidosTable = document.createElement('table');
            const FallecidosTableHead = document.createElement('thead');
            const FallecidosTableBody = document.createElement('tbody');

            const FallecidosHeaderRow = document.createElement('tr');
            const enfermedad = document.createElement('th');
            const muertes = document.createElement('th');

            enfermedad.textContent = "Nombre de la enfermedad";
            muertes.textContent = "Cantidad de muertes";

            FallecidosHeaderRow.appendChild(enfermedad);
            FallecidosHeaderRow.appendChild(muertes);
            FallecidosTableHead.appendChild(FallecidosHeaderRow);

            data.forEach(registro => {
                const FallecidosRow = document.createElement('tr');
                const FallecidosEnfermedad = document.createElement('td');
                const FallecidosCantidad = document.createElement('td');
                
                FallecidosEnfermedad.textContent = registro.enfermedad_tratada;
                FallecidosCantidad.textContent = registro.pacientes_fallecidos;
            
                FallecidosEnfermedad.classList.add("center");
                FallecidosCantidad.classList.add("center");
               
                FallecidosRow.appendChild(FallecidosEnfermedad);
                FallecidosRow.appendChild(FallecidosCantidad);
            
                FallecidosTableBody.appendChild(FallecidosRow);
            });

            FallecidosTable.appendChild(FallecidosTableHead);
            FallecidosTable.appendChild(FallecidosTableBody);
            fallecidosContainer.appendChild(FallecidosTable);
        })
}

function getPacientesAtendidos() {
    fetch("http://3.22.74.121:3000/MedicosMP")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const MedicosContainer = document.querySelector('.Respuesta_pacientes');

            const MedicosTable = document.createElement('table');
            const MedicosTableHead = document.createElement('thead');
            const MedicosTableBody = document.createElement('tbody');
        
            const MedicosHeaderRow = document.createElement('tr');
            const numColegiado = document.createElement('th');
            const nombre = document.createElement('th');
            const pacientes = document.createElement('th');
            
            numColegiado.textContent = "Numero de colegiado";
            nombre.textContent = "Nombre del medico";
            pacientes.textContent = "Pacientes atendidos";
            
            MedicosHeaderRow.appendChild(numColegiado);
            MedicosHeaderRow.appendChild(nombre);
            MedicosHeaderRow.appendChild(pacientes);
            MedicosTableHead.appendChild(MedicosHeaderRow);
        
            data.forEach(registro => {
              const MedicosRow = document.createElement('tr');
              const MedicosColegiado = document.createElement('td');
              const MedicosNombre = document.createElement('td');
              const PacientesCantidad = document.createElement('td');
              
              MedicosColegiado.textContent = registro.num_colegiado;
              MedicosNombre.textContent = registro.nombre;
              PacientesCantidad.textContent = registro.pacientes_atendidos;
        
              MedicosColegiado.classList.add("center");
              MedicosNombre.classList.add("center");
              PacientesCantidad.classList.add("center");
        
              MedicosRow.appendChild(MedicosColegiado);
              MedicosRow.appendChild(MedicosNombre);
              MedicosRow.appendChild(PacientesCantidad);
        
              MedicosTableBody.appendChild(MedicosRow);
            });
        
            MedicosTable.appendChild(MedicosTableHead);
            MedicosTable.appendChild(MedicosTableBody);
            MedicosContainer.appendChild(MedicosTable);
        })
}

function getPacientesAsistencia() {
    fetch("http://3.22.74.121:3000/PacientesMA")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const PacientesContainer = document.querySelector('.Respuesta_asistencias');

            const PacientesTable = document.createElement('table');
            const PacientesTableHead = document.createElement('thead');
            const PacientesTableBody = document.createElement('tbody');
        
            const PacientesHeaderRow = document.createElement('tr');
            const nombrePaciente = document.createElement('th');
            const asistencias = document.createElement('th');
            const peso = document.createElement('th');
            const altura = document.createElement('th');
            const masaCorporal = document.createElement('th');
            
            nombrePaciente.textContent = "Nombre del paciente";
            asistencias.textContent = "Asistencias";
            peso.textContent = "Peso";
            altura.textContent = "Altura";
            masaCorporal.textContent = "Masa corporal";

            PacientesHeaderRow.appendChild(nombrePaciente);
            PacientesHeaderRow.appendChild(asistencias);
            PacientesHeaderRow.appendChild(peso);
            PacientesHeaderRow.appendChild(altura);
            PacientesHeaderRow.appendChild(masaCorporal);
            PacientesTableHead.appendChild(PacientesHeaderRow);
        
            data.forEach(registro => {
              const PacientesRow = document.createElement('tr');
              const PacientesName = document.createElement('td');
              const PacientesAsist = document.createElement('td');
              const PacientesPeso = document.createElement('td');
              const PacientesAltura = document.createElement('td');
              const PacientesMasaC = document.createElement('td');
              
              PacientesName.textContent = registro.nombre;
              PacientesAsist.textContent = registro.asistencias_centros_medicos;
              PacientesPeso.textContent = registro.peso;
              PacientesAltura.textContent = registro.altura;
              PacientesMasaC.textContent = registro.masa_corporal;
        
              PacientesRow.appendChild(PacientesName);
              PacientesRow.appendChild(PacientesAsist);
              PacientesRow.appendChild(PacientesPeso);
              PacientesRow.appendChild(PacientesAltura);
              PacientesRow.appendChild(PacientesMasaC);
        
              PacientesTableBody.appendChild(PacientesRow);
            });
        
            PacientesTable.appendChild(PacientesTableHead);
            PacientesTable.appendChild(PacientesTableBody);
            PacientesContainer.appendChild(PacientesTable);
        })
}

function getReporteMensual() {
    fetch("http://3.22.74.121:3000/SuministrosE")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const SuministrosContainer = document.querySelector('.Respuesta_terminarse');

            const SuministrosTable = document.createElement('table');
            const SuministrosTableHead = document.createElement('thead');
            const SuministrosTableBody = document.createElement('tbody');
        
            const SuministrosHeaderRow = document.createElement('tr');
            const Producto = document.createElement('th');
            const Hospital = document.createElement('th');
            const cantidad = document.createElement('th');
            const capacidad = document.createElement('th');
            const porcentaje = document.createElement('th');
            
            Producto.textContent = "Producto";
            Hospital.textContent = "Hospital";
            cantidad.textContent = "Cantidad";
            capacidad.textContent = "Capacidad";
            porcentaje.textContent = "Porcentaje";

            SuministrosHeaderRow.appendChild(Producto);
            SuministrosHeaderRow.appendChild(Hospital);
            SuministrosHeaderRow.appendChild(cantidad);
            SuministrosHeaderRow.appendChild(capacidad);
            SuministrosHeaderRow.appendChild(porcentaje);
            SuministrosTableHead.appendChild(SuministrosHeaderRow);
        
            data.forEach(registro => {
              const SuministrosRow = document.createElement('tr');
              const SuministrosName = document.createElement('td');
              const SuministrosHospital = document.createElement('td');
              const SuministrosCantidad = document.createElement('td');
              const SuministrosCapacidad = document.createElement('td');
              const SuministrosPorcentaje = document.createElement('td');
              
              SuministrosName.textContent = registro.nombre_producto;
              SuministrosHospital.textContent = registro.nombre;
              SuministrosCantidad.textContent = registro.cantidad_producto;
              SuministrosCapacidad.textContent = registro.capacidad_producto;
              SuministrosPorcentaje.textContent = registro.porcentaje_disponible;
        
              SuministrosRow.appendChild(SuministrosName);
              SuministrosRow.appendChild(SuministrosHospital);
              SuministrosRow.appendChild(SuministrosCantidad);
              SuministrosRow.appendChild(SuministrosCapacidad);
              SuministrosRow.appendChild(SuministrosPorcentaje);
        
              SuministrosTableBody.appendChild(SuministrosRow);
            });
        
            SuministrosTable.appendChild(SuministrosTableHead);
            SuministrosTable.appendChild(SuministrosTableBody);
            SuministrosContainer.appendChild(SuministrosTable);
        })
}

function getCentrosMedicos() {
    fetch("http://3.22.74.121:3000/HospitalesMP")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const HospitalesContainer = document.querySelector('.Respuesta_centrosMedicos');

            const HospitalesTable = document.createElement('table');
            const HospitalesTableHead = document.createElement('thead');
            const HospitalesTableBody = document.createElement('tbody');

            const HospitalesHeaderRow = document.createElement('tr');
            const hospital = document.createElement('th');
            const pacientesAtendidos = document.createElement('th');

            hospital.textContent = "Centro Medico";
            pacientesAtendidos.textContent = "Cantidad de pacientes atendidos";

            HospitalesHeaderRow.appendChild(hospital);
            HospitalesHeaderRow.appendChild(pacientesAtendidos);
            HospitalesTableHead.appendChild(HospitalesHeaderRow);

            data.forEach(registro => {
                const HospitalesRow = document.createElement('tr');
                const HospitalesName = document.createElement('td');
                const HospitalesAtendidos = document.createElement('td');
                
                HospitalesName.textContent = registro.nombre;
                HospitalesAtendidos.textContent = registro.pacientes_atendidos;
               
                HospitalesRow.appendChild(HospitalesName);
                HospitalesRow.appendChild(HospitalesAtendidos);
            
                HospitalesTableBody.appendChild(HospitalesRow);
            });

            HospitalesTable.appendChild(HospitalesTableHead);
            HospitalesTable.appendChild(HospitalesTableBody);
            HospitalesContainer.appendChild(HospitalesTable);
        })
}

function getSuministros() {
    fetch("http://3.22.74.121:3000/SuministrosV")
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            const SuministrosVContainer = document.querySelector('.Respuesta_vencer');
            var primerosCinco = data.slice(0, 5);

            const SuministrosVTable = document.createElement('table');
            const SuministrosVTableHead = document.createElement('thead');
            const SuministrosVTableBody = document.createElement('tbody');
        
            const SuministrosVHeaderRow = document.createElement('tr');
            const Producto = document.createElement('th');
            const Hospital = document.createElement('th');
            const cantidad = document.createElement('th');
            const capacidad = document.createElement('th');
            const porcentaje = document.createElement('th');
            const vencimiento = document.createElement('th');
            
            Producto.textContent = "Producto";
            Hospital.textContent = "Hospital";
            cantidad.textContent = "Cantidad";
            capacidad.textContent = "Capacidad";
            porcentaje.textContent = "Porcentaje";
            vencimiento.textContent = "Fecha de vencimiento";

            SuministrosVHeaderRow.appendChild(Producto);
            SuministrosVHeaderRow.appendChild(Hospital);
            SuministrosVHeaderRow.appendChild(cantidad);
            SuministrosVHeaderRow.appendChild(capacidad);
            SuministrosVHeaderRow.appendChild(porcentaje);
            SuministrosVHeaderRow.appendChild(vencimiento);
            SuministrosVTableHead.appendChild(SuministrosVHeaderRow);
        
            primerosCinco.forEach(registro => {
              const SuministrosVRow = document.createElement('tr');
              const SuministrosVName = document.createElement('td');
              const SuministrosVHospital = document.createElement('td');
              const SuministrosVCantidad = document.createElement('td');
              const SuministrosVCapacidad = document.createElement('td');
              const SuministrosVPorcentaje = document.createElement('td');
              const SuministrosVencimiento = document.createElement('td');
              
              SuministrosVName.textContent = registro.nombre_producto;
              SuministrosVHospital.textContent = registro.nombre;
              SuministrosVCantidad.textContent = registro.cantidad_producto;
              SuministrosVCapacidad.textContent = registro.capacidad_producto;
              SuministrosVPorcentaje.textContent = registro.porcentaje_disponible;
              SuministrosVencimiento.textContent = registro.fecha_vencimiento;
        
              SuministrosVRow.appendChild(SuministrosVName);
              SuministrosVRow.appendChild(SuministrosVHospital);
              SuministrosVRow.appendChild(SuministrosVCantidad);
              SuministrosVRow.appendChild(SuministrosVCapacidad);
              SuministrosVRow.appendChild(SuministrosVPorcentaje);
              SuministrosVRow.appendChild(SuministrosVencimiento);
        
              SuministrosVTableBody.appendChild(SuministrosVRow);
            });
        
            SuministrosVTable.appendChild(SuministrosVTableHead);
            SuministrosVTable.appendChild(SuministrosVTableBody);
            SuministrosVContainer.appendChild(SuministrosVTable);
        })
}
