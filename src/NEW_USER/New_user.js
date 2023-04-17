function postMedico() {
    const url = "http://3.22.74.121:3000/Medico";
    const num_colegiado = document.getElementsByName("usuario")[0].value;
    const nombre = document.getElementsByName("nombreCompleto")[0].value;
    const direccion = document.getElementsByName("direccion")[0].value;
    const telefono = document.getElementsByName("telefono")[0].value;
    const id_centro_medico = document.getElementsByName("idCentroMedico")[0].value;
    const especialidad = document.getElementsByName("especialidad")[0].value;
    const contraseña = document.getElementsByName("contraseña")[0].value;
  
    const data = {
      "num_colegiado": num_colegiado,
      "nombre": nombre,
      "direccion": direccion,
      "telefono": telefono,
      "id_centro_medico": id_centro_medico,
      "especialidad": especialidad,
      "contraseña": contraseña
    };
  
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, params)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Datos enviados");
      })
      .catch(error => console.error(error));
  }
  
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    postMedico();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
  });
  