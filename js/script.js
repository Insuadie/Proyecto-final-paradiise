document.addEventListener("DOMContentLoaded", () => {

    
}) 

document.addEventListener("DOMContentLoaded", () => {

    const datos = {
        nombreCompleto: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    // Aca van todas las variables

    const nombreCompleto = document.querySelector("#nombre_completo");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const mensaje = document.querySelector("#mensaje");

    const formulario = document.querySelector(".formulario");

    // Si una variable asignada a una clase o id nos devuelve "null" lo mas probable
    // es que pusimos mal la clase o id

    // Aca van los eventlisteners
    nombreCompleto.addEventListener("blur", leerMensaje);
    email.addEventListener("blur", leerMensaje);
    telefono.addEventListener("blur", leerMensaje);
    mensaje.addEventListener("blur", leerMensaje);

    formulario.addEventListener("submit" , (e) => {
        e.preventDefault();
        
        const {email, telefono, mensaje} = datos;

        if(nombreCompleto === '' || email === '' || telefono === '' || mensaje === ''){
            mostrarError("todos los campos son obligatorios");
            return;
        }

        mostrarCorrecto("Mensaje enviado...");
        console.log(email);
        console.log(telefono);
        console.log(mensaje);
        formulario.reset();
    });
    

    // boton_contacto.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     spinner();
    //     // Simulamos una tarea asíncrona de 2 s
    //     setTimeout(() => {
    //         Swal.close();   // o Swal.fire({icon:'success', title:'Listo'})
    //     }, 3000);
    // })


/* ######################################################################################## */
// Definimos las funciones
function mostrarError(mensaje){
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("alertaError");

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
}

function mostrarCorrecto(mensaje){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add("alertaCorrecta");

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function leerMensaje(e){
     datos[e.target.id] = e.target.value;

    //  console.log(datos);
}

function principal(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Enviando... Espere por favor",
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
  }
});
}

// Termina el apartado de funciones
/* ######################################################################################### */
}) 