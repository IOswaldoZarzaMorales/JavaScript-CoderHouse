
//let platoElegido = prompt('Que quieres comer hoy?');
//alert('Hoy es un buen dia para comer ' + platoElegido);//?Concatenacion se usa "+"


//?Operaciones con variables 
let platoPrincipal = 1000;
let bebida = 400;
let totalPedido = platoPrincipal + bebida;
// console.log(totalPedido);

// alert('El precio total de este pedido es de  ' + totalPedido + " pesos");

let dobleDePrecio = platoPrincipal * 2;
let porciones = 2;
let comensales = 3;

let precioTotal = platoPrincipal * porciones;
// console.log(dobleDePrecio);
// console.log(precioTotal);

let dividirCostos = precioTotal/comensales;
// console.log(dividirCostos);

let descuento = 100;

let precioConDescuento = precioTotal - descuento;
// console.log(precioConDescuento);

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');

let nombreCompleto = nombre + ' ' + apellido;

alert(nombreCompleto);