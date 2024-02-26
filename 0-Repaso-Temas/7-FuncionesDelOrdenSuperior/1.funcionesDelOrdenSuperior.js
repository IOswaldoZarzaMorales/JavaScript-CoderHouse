//!Material -----> https://youtu.be/-JWVobI2m80

//?<-------Abstraccion------->
// let total = 0;

// for (let i = 1; i<= 10; i++){
//     total += i;
//     //console.log(total);
// }

// console.log(total);

//*Dentro de una funcion
//*Funcion reutilizable

/*function sumarRango(min, max) {
    let total = 0;

    for (let i = min; i<= max; i++){
        total += i;
    //console.log(total);
    }

    return total;
}

console.log(sumarRango(1, 20));
console.log(sumarRango(3, 7));
console.log(sumarRango(2, 4));

let sumaEntreTresYSiete = sumarRango(3, 7);
console.log(sumaEntreTresYSiete);*/

//?<----------Retorno de funciones--------->

/*function mayorQue(x) {
    return(num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);


//const mayorQueDiez = num => num > 10;
console.log(mayorQueDiez(9));*/

//?<---------Metodos de busqueda y Transformacion-------->

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ['Perro', 'Gato', 'Cisne', 'Tortuga'];
const productos = [
    {nombre: 'Mesa', precio: 35000},
    {nombre: 'Silla de plastico', precio: 2000},
    {nombre: 'Silla de madera', precio: 2500},
    {nombre: 'Ventana', precio: 4500},
    {nombre: 'Puerta', precio: 3000}
];

//?Metodo ----> forEach() => Recorrer el Array y ejecutar lo que le digamos con cada elemento

// numeros.forEach((numero) => {
//     console.log(numero);
// });

// productos.forEach((producto) => {
//     console.log(producto);
// })

//*Acceder a una propiedad de nuestros objetos

// productos.forEach((producto) => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// })

//? find () => Recorrer el Array y retornar el primer elemento que cumpla con la condicion

//*Una forma de usarlo
// const perro = animales.find((animal) => {
//     return animal === 'Perro'
// });
// console.log(perro);

//*Forma Simplificada
// const perro = animales.find((animal) => animal === 'Perro')
// console.log(perro);

// let productoElegido = prompt('Ingrese el producto que quiere comprar');
// console.log(productos.find((producto) => producto.nombre === productoElegido));

//? filter() => Recorrer el Array Y retornar uno nuevo con todos los elementos que cumplan con una condicion

// const gato = animales.filter((animal) => animal === "Gato");
// console.log(gato);

//*Ejemplo de dos objetos con filter

// const sillas = productos.filter((producto) => producto.nombre.includes('Silla'));
// console.log(sillas);

//?Some() => Recorrer el Array y responder true o false si encuentra o no un elemento que cumpla con la condicion

// const cisne =animales.some((animal) => animal === "Cisne");
// console.log(cisne);

// const caballo =animales.some((animal) => animal === "Caballo");
// console.log(caballo);

//?map () => Recorrer el Array y retornar uno nuevo con los elementos transformados del Array original 

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);//*Extraer datos en un array nuevo

const preciosActualizados = productos.map((producto) => {
    return{
        nombre: producto.nombre,
        precio: producto.precio * 1.5
    }
})

// console.log(preciosActualizados);
// console.log(productos);

//? reduce () =>  recorrer el array y retornarnos un único valor tras hacer una operacion sobre los elementos

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// console.log(total);

const totalCarrito = productos.reduce((acumulador,producto ) => acumulador + producto.precio, 0);
// console.log(totalCarrito);

// ?sort() => reordenar el array segun el criterio que le ordenemos 
// numeros.sort((a, b) => a - b);
// console.log(numeros);
// // numeros.sort((a, b) => a + b);
// console.log(numeros);
//?MATH 

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

//? min() => Retornar el numero minimo de un listado
//console.log(Math. min(50, 12, 37, 17, 25, 6));
//? max() => Retornar el numero minimo de un listado
//console.log(Math. max(50, 12, 37, 17, 25, 6));
//?ceil() => Retornar el numero que le indiquemos redondeando hacia arriba
//console.log(Math.ceil(numeroDecimal1));
//console.log(Math.ceil(numeroDecimal2));
//?floor => Retornar el numero que le indiquemos redondeado hacia abajo
//console.log(Math.floor(numeroDecimal1));
//console.log(Math.floor(numeroDecimal2));
//?random() => Retornar un numero aleatorio entre 0 inclusive y 1 inclusive
// console.log(Math.random());
// console.log(Math.round(Math.random()*50));
// console.log(Math.round(Math.random()*50 + 20));

//console.log(Math.floor(Math.random() * 3 + 1));

function generarNumero(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

const numeroRandom = generarNumero(100, 200)
console.log(numeroRandom);
