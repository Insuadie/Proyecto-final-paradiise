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



    // Declaramos las funciones
    function leerInput(e){
        if(e.target.value === ''){
            console.log("El campo no puede estar vacio");
            return;
        }
        datos[e.target.id] = e.target.value;

        console.log(datos);
    }

    //Habilita o deshabilita según todo esté lleno (no vacío)
    function verificar() {
        const completo = Object.values(datos).every(v => v !== '');
        btn = !completo;
    }

})