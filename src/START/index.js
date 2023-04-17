const form = document.querySelector('#login_form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.querySelector('#user').value;
  const password = form.querySelector('#pass').value;

  fetch('http://3.22.74.121:3000/Medico')
    .then(response => response.json())
    .then(data => {
      const medicoEncontrado = data.find(medico => medico.num_colegiado === username && medico.contraseña === password);

      if (medicoEncontrado) {
        window.location.href = "../MENU/menu.html";
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        form.appendChild(errorMessage);
      }
    })
    .catch(error => {
      console.error(error);
    });
});