document.addEventListener("DOMContentLoaded", () => {

    
    const inicio = document.querySelector("#imagen");

    inicio.addEventListener("click", () => {
        principal();
    })

    // Funciones

function principal(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "moviendo al inicio...",
        showConfirmButton: false,
        timer: 3000
    });
}

}) 