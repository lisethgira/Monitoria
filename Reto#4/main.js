//PRODUCTOS
const productos = [
//ABRIGOS
    {
        id: "abrigo-#1",
        titulo: "Abrigo #1",
        imagen: "./Imagenes/Abrigos/1.jpg",
        categoria: {
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-#2",
        titulo: "Abrigo #2",
        imagen: "./Imagenes/Abrigos/2.jpg",
        categoria: {
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-#3",
        titulo: "Abrigo #3",
        imagen: "./Imagenes/Abrigos/3.jpg",
        categoria: {
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-#4",
        titulo: "Abrigo #4",
        imagen: "./Imagenes/Abrigos/4.jpg",
        categoria: {
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio: 1000
    },

//CAMISETAS
    {
        id: "camiseta-#1",
        titulo: "Camiseta #1",
        imagen: "./Imagenes/Camisetas/1.jpg",
        categoria: {
            nombre:"Camisetas",
            id:"camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-#2",
        titulo: "Camiseta #2",
        imagen: "./Imagenes/Camisetas/2.jpg",
        categoria: {
            nombre:"Camisetas",
            id:"camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-#3",
        titulo: "Camiseta #3",
        imagen: "./Imagenes/Camisetas/3.jpg",
        categoria: {
            nombre:"Camisetas",
            id:"camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-#4",
        titulo: "Camiseta #4",
        imagen: "./Imagenes/Camisetas/4.jpg",
        categoria: {
            nombre:"Camisetas",
            id:"camisetas"
        },
        precio: 1000
    },

//PANTALONES
    {
        id: "pantalones-#1",
        titulo: "Pantalones #1",
        imagen: "./Imagenes/Pantalones/1.jpg",
        categoria: {
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-#2",
        titulo: "Pantalones #2",
        imagen: "./Imagenes/Pantalones/2.jpg",
        categoria: {
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-#3",
        titulo: "Pantalones #3",
        imagen: "./Imagenes/Pantalones/3.jpg",
        categoria: {
           nombre:"Pantalones",
            id:"pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-#4",
        titulo: "Pantalones #4",
        imagen: "./Imagenes/Pantalones/4.jpg",
        categoria: {
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML =`    
        <img class="producto-imagen" src=${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button> 
        </div>`
        ;

        contenedorProductos.append(div);
    })
} 

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto.categoria.id === e.currentTarget.id)
        cargarProductos(productosBoton);

    })
})

