//?<-----  ----->

const frutas = ['manzana', 'naranja', 'banana'];

frutas.push('pera');//?El siguiente metodo agrega elementos al final de nuestro array 

frutas.unshift('mango')//?El siguiente metodo agrega elementos al principio de nuestro array

frutas.shift()//?Elimina el primer elemento del array

frutas.pop()//?Elimina el ultimo elemento del array

console.log(frutas.join('-'));//?Genera un string de todos los elementos de nuestro array
console.log(frutas.join('*'));//?Genera un string de todos los elementos de nuestro array

const prendas = ['pantalon', 'blusa', 'saco', 'corbata'];

console.log(prendas.indexOf('pantalon'));//?Permite obtener el indice de un elemento de un array
console.log(prendas.indexOf('polera'));//?Permite obtener el indice de un elemento de un array

console.log(prendas.includes('corbata'));//?permite averiguar si el elemento existe
console.log(prendas.includes('corba'));//?permite averiguar si el elemento existe

console.log(prendas.sort());//?ordena de manera alfabetica nuestro array

console.log(prendas.reverse());//?invierte el orden de los elementos

console.log(prendas.sort().reverse());//?ordena de manera alfabetica nuestro array y invierte el orden de los elementos

// console.log(frutas.length);
