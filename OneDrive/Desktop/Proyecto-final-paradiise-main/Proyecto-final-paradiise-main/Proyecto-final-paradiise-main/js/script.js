document.addEventListener("DOMContentLoaded", () => {

        // ---------- 1) Array de imágenes ----------
        // Sustituye estas URLs por las tuyas ;)
        const imagenes = Array.from({length: 57}, (_ ,i) =>
        `https://picsum.photos/id/${i+10}/400/300`
        );

        // ---------- 2) Variables de control ----------
        const GALERIA     = document.getElementById('galeria');
        const BTN_MAS     = document.getElementById('btnMas');
        const BLOQUE      = 10;          // cuántas mostrar por “página”
        let mostradas     = 0;           // contador interno

        // ---------- 3) Función que inserta el siguiente bloque ----------
        function mostrarSiguientes() {
        const restantes = imagenes.slice(mostradas, mostradas + BLOQUE);
        restantes.forEach(src => {
            const img = new Image();
            img.src = src;
            img.loading = 'lazy';       // <— para ahorrar ancho de banda
            GALERIA.appendChild(img);
        });
        mostradas += restantes.length;

        // Desactiva el botón si ya mostramos todo
        if (mostradas >= imagenes.length) {
            BTN_MAS.disabled = true;
            BTN_MAS.textContent = 'Fin del catálogo';
        }
        }

        // ---------- 4) Eventos ----------
        BTN_MAS.addEventListener('click', mostrarSiguientes);

        // ---------- 5) Primera carga ----------
        mostrarSiguientes();    


//     const inicio = document.querySelector("#imagen");

//     inicio.addEventListener("click", () => {
//         principal();
//     })

//     // Funciones

// function principal(){
//     Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "moviendo al inicio...",
//         showConfirmButton: false,
//         timer: 3000
//     });
// }

}) 

