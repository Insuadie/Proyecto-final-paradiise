 document.querySelector('#registro .btn').addEventListener('click', function () {
    const password = document.getElementById('registro-password').value;
    const confirmar = document.getElementById('confirmar-password').value;

    // Validación: las contraseñas deben coincidir
    if (password !== confirmar) {
      alert("❌ Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      telefono: document.getElementById('telefono').value,
      email: document.getElementById('email').value,
      dni: document.getElementById('dni').value,
      username: document.getElementById('usuario').value,
      password: password // No se envía confirmar-password
    };

    fetch("http://localhost:8080/user/create", {
      method: "POST",
      credentials: "include", // solo si usás sesiones/cookies
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text); });
      }
      return response.text();
    })
    .then(data => {
      alert("✅ Usuario creado con éxito");
      console.log("Respuesta:", data);
      document.getElementById("registro").reset(); // Limpia el formulario
    })
    .catch(error => {
      alert("❌ Error al registrar usuario:\n" + error.message);
      console.error("Error:", error);
    });
  });
