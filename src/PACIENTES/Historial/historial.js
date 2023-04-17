const params = new URLSearchParams(window.location.search);
const dpi = params.get('dpi');

const divUsuario = document.getElementById("id_usuario");

divUsuario.textContent = dpi;