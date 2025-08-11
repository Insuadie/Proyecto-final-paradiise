window.addEventListener("load", () => {

    const datos = {

        nombre_completo: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    
    // Asignar las etiquetas , id o clases a una variable

    const formulario = document.querySelector(".formulario");
    const btn = document.querySelector("#boton_contacto");

    // console.log(formulario);

    const nombre_completo = document.querySelector("#nombre_completo");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const mensaje = document.querySelector("#mensaje");

    // console.log(nombreCompleto);

    //Asignamos los eventlisteners

    nombre_completo.addEventListener("blur", leerInput);
    email.addEventListener("blur", leerInput);
    telefono.addEventListener("blur", leerInput);
    mensaje.addEventListener("blur", leerInput);

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        spinner();
        formulario.reset();
    })



    // Declaramos las funciones
    function leerInput(e){
        if(e.target.value === ''){
            mostrarMensaje(`El campo ${e.target.id} no puede estar vacio`,e.target.parentElement);
            return;
        }
        datos[e.target.id] = e.target.value;

        console.log(datos);
    }

    function mostrarMensaje(mensaje,parametro){
        const alerta = parametro.querySelector(".alertaError");
        if(alerta){
            alerta.remove();
        }
        contenedor = document.createElement("P");
        contenedor.textContent = mensaje;
        contenedor.classList.add("alertaError");
        parametro.appendChild(contenedor);

        setTimeout(() => {
            contenedor.remove();
        }, 3000);
    }

    function spinner(){
        Swal.fire({
            title: 'Cargando...',
            html: '<div class="spinner"></div>',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(); // opcional si querés que tenga efecto "cargando"
                setTimeout(() => {
                    Swal.close();
            }, 3000);
            }
        });
    }

    //Habilita o deshabilita según todo esté lleno (no vacío)
    function verificar() {
        const completo = Object.values(datos).every(v => v !== '');
        btn = !completo;
    }

})