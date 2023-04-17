function mostrarDatosTabla() {
    // Primero, hacemos la llamada al API utilizando fetch
    fetch('http://3.22.74.121:3000/Fallecidos', {mode: 'cors'})
      .then(response => response.json()) // Convertimos la respuesta en un objeto JSON
      .then(data => {
        // Obtenemos los datos y los almacenamos en una variable
        var fallecidos = data;
  
        // Creamos una variable para almacenar el HTML de la tabla
        var html = '<table><thead><tr><th>Enfermedad tratada</th><th>Pacientes fallecidos</th></tr></thead><tbody>';
  
        // Iteramos sobre los datos y vamos construyendo el contenido de la tabla
        fallecidos.forEach(value => {
          html += '<tr><td>' + value.enfermedad_tratada + '</td><td>' + value.pacientes_fallecidos + '</td></tr>';
        });
  
        // Cerramos la etiqueta tbody y table
        html += '</tbody></table>';
  
        // Agregamos el HTML de la tabla al div 'espacio_tabla'
        document.getElementById('espacio_tabla').innerHTML = html;
      })
      .catch(error => console.error(error)); // Manejamos cualquier error que se produzca
  }
  
  // Llamamos a la función para mostrar los datos en la tabla
  mostrarDatosTabla();
  