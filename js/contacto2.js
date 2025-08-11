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

    formulario.addEventListener("input", (e) => {

        if (e.target.id in datos) {
            datos[e.target.id] = e.target.value.trim();   // guarda o vacía
            verificar();                                    // 2️⃣ chequea
        }
    })

    /*(opcional) Validación extra al enviar */
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        // aquí ya sabes que todos están llenos
        console.log('Enviando', datos);
    });

    // Declaramos las funciones
    function leerInput(e){

        datos[e.target.id] = e.target.value;

        console.log(datos);
    }

    //Habilita o deshabilita según todo esté lleno (no vacío)
    function verificar() {
        const completo = Object.values(datos).every(v => v !== '');
        btn = !completo;
    }

/* ###################################################################################### */
    //Objeto de prueba

    const tenistas = { // Definimos el objeto

        nombre : "Jannik",
        apellido: "Sinner",
        ranking: 1
    }

    const titulos = {

        titulos: 21,
        GS: 4
    }

    console.log(Object.values(tenistas).every(t => t !== '')); /* Saber si todos los campos
                                                              de un formulario tiene contenido */

    tenistas.imagen = "italia.jpg"; // Agregamos una propiedad al objeto
    
    delete tenistas.imagen; // Eliminamos una propiedad del objeto

    const {nombre} = tenistas; // Destructuring de objetos

    Object.freeze(tenistas); // Frezamos el objeto para que no se pueda alterar
    Object.seal(tenistas) // No te permite agregar propiedades pero si modificar las ya existentes

    console.log(Object.isFrozen(tenistas)); // Saber si un objeto esta frezado

    const nuevoObjeto = {...tenistas, ...titulos} //Spread Operator unimos 2 objetos

    console.log(nuevoObjeto);

    // console.log(tenistas);

/* Terminamos con las pruebas de objetos */    
/* ###################################################################################### */

/* ####################################################################################### */
 //array de pruebas

const compras = [1,2,3,4]; // Declaramos un array

const compras2 = new Array() // otra forma de declarar un array

compras.push(5) // Agregamos al final del array
compras.unshift(10,20,30) // Agremos al final del array

compras.pop() // Elimina el ultimo elemento del array
compras.shift() // Elimina el primer elemento del array

compras.splice(1,1) //El primer argumento es desde que posicion queremos eliminar
                    // El segundo argunmento es cuantos vamos a eliminar desde esa posicion

if(compras.length > 0){
    console.log(`El carrito en este momento tiene productos, cantidad: ${compras.length}`);
}else{
    console.log("El carrito esta vacio");
}


//Arrays methods

const comprasNuevo = [...compras];

const productos = [
    {celular: "Samsung", modelo: "S25", precio:2500000, cantidad: 10},
    {celular: "Samsung", modelo: "S24+", precio:1700000, cantidad: 5},
    {celular: "Samsung", modelo: "A56", precio:900000, cantidad: 3}
]

console.log(productos);

let buscar = comprasNuevo.includes(1); // Includes ideal para array planos

buscar = productos.some(producto => producto.modelo === 'S25') //Some ideal para array de objetos

buscar = productos.reduce((total,producto) => total + producto.precio,0) //Sumamos los precios

buscar = productos.filter(producto => producto.precio > 3000000);


console.log(buscar);

 /* Terminamos con los arrays de pruebas */
 /* ##################################################################################### */
})

/*Dato de color , HOY EN DIA NO SE RECOMIENDA MODIFICAR NI LOS ARREGLOS NI LOS OBJETOS ORIGINALES */