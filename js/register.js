window.addEventListener("load", () => {

  const datos = {
    nombre : '',
    apellido : '',
    telefono : '',
    email : '',
    dni : '',
    usuario : '',
    registro_password : '',
    confirmar_password : ''
  }

  // Definimos todas las variables
  const nombre = document.querySelector("#nombre"); /* Campo nombre */
  const apellido = document.querySelector("#apellido"); /* Campo apellido */
  const telefono = document.querySelector("#telefono"); /* Campo Telefono */
  const email = document.querySelector("#email"); /* Campo email */
  const dni = document.querySelector("#dni"); /* Campo Dni */
  const nombre_usuario = document.querySelector("#usuario"); /* Campo Usuario */
  const password = document.querySelector("#registro_password"); /* Campo Password */
  const confirmar_password = document.querySelector("#confirmar_password"); /* Campo confirmar password */

  const container = document.querySelector(".password_container"); /* Este campo envuelve al input password */

  // console.log(nombre,apellido,telefono,email,dni,nombre_usuario,password,password,confirmar_password);

  const formulario = document.querySelector("#registro.container"); /* Este es el formulario */
  const btn = document.querySelector(".btn_registro"); /* Este es el boton del formulario */

  // console.log(nombre.parentElement);
  // console.log(container);

  // Definimos los eventListeners
  nombre.addEventListener("blur", leerDatos);
  apellido.addEventListener("blur", leerDatos);
  telefono.addEventListener("blur", leerDatos);
  email.addEventListener("blur", leerDatos);
  dni.addEventListener("blur", leerDatos);
  nombre_usuario.addEventListener("blur", leerDatos);
  password.addEventListener("blur", leerDatos);
  confirmar_password.addEventListener("blur", leerDatos);

  container.addEventListener("click", (event) => {
    // Si se clickea dentro del área del icono
    const containerRect = container.getBoundingClientRect();
    const clickX = event.clientX - containerRect.left;

    if (clickX > containerRect.width - 40) { // área del ojo
      password.type = password.type === 'password' ? 'text' : 'password';
    }
  })

  formulario.addEventListener("submit", (e) => {
    // e.preventDefault();
      spinner();
    formulario.reset();
  });

  // Definimos las Funciones
  function leerDatos(e){
    
    if(e.target.value === ''){
      imprimirMensaje(`El campo ${e.target.name} no puede estar vacio`, e.target.parentElement);
      datos[e.target.id] = e.target.value;
      console.log(datos);
      verificar();
      return;
    }else if(e.target.name === 'contraseña' && (e.target.value).length < 8){
      imprimirMensaje(`El campo ${e.target.name} no puede tener menos de 8 caracteres`, e.target.parentElement);
    }
    datos[e.target.id] = e.target.value;
    console.log(datos);
    verificar();
  }

  function imprimirMensaje(mensaje,referencia){
    const contenido = document.createElement("P");
    contenido.textContent = mensaje;
    contenido.classList.add("alertaError");
    referencia.appendChild(contenido);

    setTimeout(() => {
      contenido.remove();
    }, 3000);
  }

  // /Habilita o deshabilita según todo esté lleno (no vacío)
    function verificar() {
        const completo = Object.values(datos).every(v => v !== '');
        // btn = !completo;
        if(completo == true){
            btn.style.opacity = 1;
            btn.disable = false;
        }else{
            btn.style.opacity = 0.5;
            btn.disable = true;
        }
    }

    function principal(mensaje){
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: mensaje,
          showConfirmButton: false,
          timer: 3000
      });
    }
    function spinner(){
        Swal.fire({
            title: 'Enviando... Espere por favor',
            allowOutsideClick: false,
            loaderHtml: `
            <svg width="60" height="60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#3f51b5" stroke-width="10"
                        stroke-dasharray="165" stroke-linecap="round" fill="none">
                    <animateTransform attributeName="transform" type="rotate"
                                    dur="1s" repeatCount="indefinite" from="0 50 50" to="360 50 50"/>
                </circle>
            </svg>
                        `,
            didOpen: () => {
            // Muestra el spinner nativo
            Swal.showLoading();

            setTimeout(() => {
              Swal.close();
            }, 3000);
      }
    });
  }
})