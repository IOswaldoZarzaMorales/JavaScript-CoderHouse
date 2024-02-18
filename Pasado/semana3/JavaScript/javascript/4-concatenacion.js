let platoElegido = prompt('Que quieres comer hoy?')

// alert(`Hoy es un buen dia para comer + ${platoElegido}`)

alert('hoy es un buen dia para comer  ' + platoElegido)

let platoPrincipal = 1000;
let bebida = 100;

let totalPedido = platoPrincipal + bebida;

console.log(totalPedido)

alert ('el precio total de este pedido es de   ' + totalPedido + 'pesos');

let dobleDePrecio =  platoPrincipal * 2;

let porciones = 2;
let comenzales = 3;

let precioTotal = platoPrincipal * porciones;

let dividirCostos = precioTotal / comenzales;

let descuento = 10;

let precioConDescuento = precioTotal - descuento;

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');

let nombreCompleto = nombre + " " + apellido;

console.log('bienvenido' + " " +  nombreCompleto);