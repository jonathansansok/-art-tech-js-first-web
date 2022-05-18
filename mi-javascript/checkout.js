const productos = JSON.parse(localStorage.getItem("carrito"));

let divProducto = document.getElementById("divProducto");
let divPrecio = document.getElementById("divPrecio");
let divCantidad = document.getElementById("divCantidad");
let precioFinal = document.getElementById("precioFinal");

const total =  () => {
    let totalPagar = 0;
    precioFinal.innerHTML = "";
for (prod of productos) {
    totalPagar += prod.precio * prod.cantidad;
    }
    precioFinal.innerHTML += "<h5>Total: " + <span id="totalCero">(totalPagar)</span> + "</h5>";
}

const renderCheckOut = () => {
    divProducto.innerHTML = "";
divPrecio.innerHTML = "";
divCantidad.innerHTML = "";
for (prod of productos) {
    divProducto.innerHTML += "<h5>" + prod.titulo + "</h5>";
    divPrecio.innerHTML += "<h5>" + (prod.precio * prod.cantidad) + "</h5>";
    divCantidad.innerHTML += "<h5><button class='botonesCheckout' onclick= 'removeItem("+prod.id+")'>- </button> " + prod.cantidad + " <button class='botonesCheckout' onclick= 'addItem("+prod.id+")'>+</button></h5 >";
    }
    total();
}

const addItem = (idProducto) => {
            productos.map((producto) => {
            if (producto.id == idProducto) {
                producto.cantidad++;
                renderCheckOut();
            }
        })
}
const removeItem = (idProducto) => {
    productos.map((producto) => {
    if (producto.id == idProducto) {
        if (producto.cantidad > 1)
         {  
        producto.cantidad--;
        renderCheckOut();
    }else {
        productos.splice(productos.indexOf(producto), 1);
        (localStorage.setItem("carrito", JSON.stringify(productos)));
        renderCheckOut();
    }
}})
}
renderCheckOut();

const comprar = () => {
    swal({
        title: "¡Gracias por comprar!",
        text: "¡Te esperamos pronto!",
        icon: "success",
        button: "Aceptar",
    }).then((result) => {
        comparando();
        vaciarCarrito();
        volverATienda();

    });
}
//hacer que la funcion de abajo  me devuelva a la tienda despues del alert de finalizacion de compra
//y que vuelva con el carrito reseteado


function comparando()  {
    const finalCero = document.querySelector('#finalTotal');
if (finalCero== 0) {
    document.getElementById("btnComprar").style.display = "none";
}}



/* function ceroProductos(){
    if(total == 0) {
        document.getElementById("btnComprar").style.display = "none";
    }
} */

const volverATienda = () => {
    window.location.href = "tienda.html";}

function vaciarCarrito(){
    localStorage.setItem("carrito", JSON.stringify([]));
}

document.getElementById("btnComprar").addEventListener("click", comprar,);





