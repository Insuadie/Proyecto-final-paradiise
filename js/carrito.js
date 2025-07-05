let carrito = [];

// Al cargar la página, recuperar carrito de localStorage
window.addEventListener("load", () => {
  const guardado = localStorage.getItem("carrito");
  if (guardado) {
    carrito = JSON.parse(guardado);
    mostrarCarrito();
  }
});

// Evento global para agregar o vaciar
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-agregar")) {
    e.preventDefault();

    const id = e.target.dataset.id;
    const nombre = e.target.dataset.nombre;
    const precio = parseFloat(e.target.dataset.precio);

    agregarAlCarrito(id, nombre, precio);
  }

  if (e.target.id === "btn-vaciar") {
    vaciarCarrito();
  }
});

function agregarAlCarrito(id, nombre, precio) {
  const existe = carrito.find(p => p.id === id);

  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  guardarCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const carritoTotal = document.getElementById("carrito-total");
  carritoItems.innerHTML = "";

  let total = 0;

  carrito.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    const item = document.createElement("p");
    item.textContent = `${p.nombre} x ${p.cantidad} = $${subtotal}`;
    carritoItems.appendChild(item);
  });

  carritoTotal.textContent = total;
}

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
