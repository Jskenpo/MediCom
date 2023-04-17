function enviarFormulario(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const body = {};
      formData.forEach((value, key) => body[key] = value);
      const response = await fetch(`http://3.22.74.121:3000/Medico/${body.num_colegiado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_centro_medico: body.id_centro_medico })
      });
      const data = await response.json();
      console.log(data);
      form.reset();
      alert('Se ha actualizado el centro médico del usuario.');
    });
  }
  