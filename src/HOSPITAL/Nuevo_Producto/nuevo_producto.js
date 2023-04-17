function enviarFormulario(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const body = {};
      formData.forEach((value, key) => body[key] = value);
      const response = await fetch('http://3.22.74.121:3000/Inventario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
    });
  }
  