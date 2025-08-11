window.addEventListener("load", () => {

    const formulario = document.querySelector(".formulario");

    const producto = document.querySelector("#nombre_completo");

    const inventarioCelulares = [
            { id: 1,  marca: 'Apple',     modelo: 'iPhone 15 Pro',        unidades: 8,  precio: 1199 },
            { id: 2,  marca: 'Samsung',   modelo: 'Galaxy S24 Ultra',     unidades: 12, precio: 1099 },
            { id: 3,  marca: 'Motorola',  modelo: 'Edge 50 Ultra',        unidades: 20, precio: 799  },
            { id: 4,  marca: 'Xiaomi',    modelo: '13T Pro',              unidades: 15, precio: 699  },
            { id: 5,  marca: 'Google',    modelo: 'Pixel 9 Pro',          unidades: 10, precio: 999  },
            { id: 6,  marca: 'Oppo',      modelo: 'Find X7',              unidades: 7,  precio: 899  },
            { id: 7,  marca: 'OnePlus',   modelo: '12R',                  unidades: 18, precio: 649  },
            { id: 8,  marca: 'Realme',    modelo: 'GT 6 Neo',             unidades: 25, precio: 499  },
            { id: 9,  marca: 'Huawei',    modelo: 'P70 Pro',              unidades: 9,  precio: 1049 },
            { id: 10, marca: 'Sony',      modelo: 'Xperia 1 VI',          unidades: 5,  precio: 1199 },

            // — Nuevos —
            { id: 11, marca: 'Apple',     modelo: 'iPhone 15 Pro Max',    unidades: 6,  precio: 1299 },
            { id: 12, marca: 'Apple',     modelo: 'iPhone 15',            unidades: 14, precio: 899  },
            { id: 13, marca: 'Samsung',   modelo: 'Galaxy S24+',          unidades: 11, precio: 999  },
            { id: 14, marca: 'Samsung',   modelo: 'Galaxy Z Fold 5',      unidades: 4,  precio: 1499 },
            { id: 15, marca: 'Samsung',   modelo: 'Galaxy Z Flip 5',      unidades: 8,  precio: 1049 },
            { id: 16, marca: 'Google',    modelo: 'Pixel 9a',             unidades: 22, precio: 499  },
            { id: 17, marca: 'Xiaomi',    modelo: 'Redmi Note 13 Pro 5G', unidades: 30, precio: 349  },
            { id: 18, marca: 'Xiaomi',    modelo: 'POCO F6 Pro',          unidades: 16, precio: 579  },
            { id: 19, marca: 'Motorola',  modelo: 'Edge 40 Neo',          unidades: 18, precio: 449  },
            { id: 20, marca: 'Motorola',  modelo: 'Razr 50 Ultra',        unidades: 6,  precio: 1199 },
            { id: 21, marca: 'OnePlus',   modelo: '12',                   unidades: 13, precio: 699  },
            { id: 22, marca: 'Honor',     modelo: 'Magic 6 Pro',          unidades: 9,  precio: 1099 },
            { id: 23, marca: 'Vivo',      modelo: 'X100 Pro',             unidades: 7,  precio: 999  },
            { id: 24, marca: 'Asus',      modelo: 'ROG Phone 8',          unidades: 5,  precio: 1399 },
            { id: 25, marca: 'Nothing',   modelo: 'Phone (2 a)',          unidades: 21, precio: 429 }
        ];


        // const resultados = inventarioCelulares.filter( celular => celular.marca === 'Samsung' && celular.precio > 1500);

        // console.log(resultados);


        datos = {
            busqueda:''
        }

        producto.addEventListener("blur", (e) => {
            datos[e.target.id] = e.target.value; 
            console.log(datos);
        })

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            mostrarDatos(datos.nombre_completo);


        })

        // let contenedor = '';

        function mostrarDatos(marca2){

             const resultado = inventarioCelulares.filter( Element => Element.marca === marca2); 
             console.log(resultado);

                // const {id,marca,modelo,unidades,precio} = Element;
                // contenedor = document.createElement("P");
                // contenedor.textContent = `ID:${id} + MARCA:${marca} + MODELO:${modelo} + UNIDADES:${unidades} + PRECIO:${precio} `;
                // contenedor.classList.add('text-center');
                // formulario.appendChild(contenedor);

                // contenedor.textContent = "";
            }   
})