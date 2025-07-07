document.getElementById('btn2').addEventListener('click', async (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const username = document.getElementById('usuario').value.trim();
  const password = document.getElementById('registro-password').value;
  const confirmarPassword = document.getElementById('confirmar-password').value;

  if (!nombre || !apellido || !telefono || !email || !dni || !username || !password || !confirmarPassword) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (password !== confirmarPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  const registroData = {
    name: nombre,
    lastname: apellido,
    phoneNumber: telefono,
    email: email,
    dni: dni,
    userEntityDto: {
      username: username,
      password: password
    }
  };

  try {
    const response = await fetch('http://localhost:8080/client/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registroData)
    });

    if (response.ok) {
      alert('Registro exitoso. Ya podes iniciar sesión.');
      // window.location.href = '/login.html'; // opcional para redirigir
    } else {
      const errorText = await response.text();
      alert('Error en el registro: ' + errorText);
    }
  } catch (error) {
    alert('Error de conexión: ' + error.message);
  }
});