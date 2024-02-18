// ?<----    ---->

// ?<----  Introducimos elementos al array al final  ---->
// const frutas = ['manzanas', 'naranja', 'banana']; //Array

// frutas.push('pera'); 

// console.table(frutas);

// ?<----  Agregar elementos al principio del array  ---->
// frutas.unshift('melon'); 

// console.table(frutas);

// ?<----  Quita el primer elemento del array  ---->
// frutas.shift()
// console.table(frutas);


// ?<----  Elimina el ultimo elemento  ---->
// const frutas = ['manzanas', 'naranja', 'banana'];

// frutas.pop()

// console.log(frutas);

// ?<----  Union de strings  ---->

// const nombres = ['Oswaldo', 'Ivan', 'Zarza', 'Morales'];

// console.log(nombres.join(" - "));//Ayuda a unor los strings
// console.log(nombres.join(' / '));//Ayuda a unor los strings

// ?<----Permite buscar elementos dentro de un array y si existe te devuelve el index---->

// const prendas = ['pantalon', 'saco', 'blusa', 'musculosa' ]
// console.log(prendas.indexOf('pantalones'));
// console.log(prendas.indexOf('pantalon'));

// ?<----  Permite saber si existe o no el elemento devuelve un valor booleano  ---->

// const prendas = ['pantalon', 'saco', 'blusa', 'musculosa' ];

// console.log(prendas.includes('pantalon'));
// console.log(prendas.includes('pantalones'));

// ?<----  Permite ordenar de manera alfabetica todos los elementos del array  ---->

// const prendas = ['pantalon', 'saco', 'blusa', 'musculosa', 'zara', 'abeja' ];
// console.log(prendas.sort());

// ?<----  Invierte todo el orden del array  ---->

// const prendas = ['pantalon', 'saco', 'blusa', 'musculosa', 'zara', 'abeja' ];
// console.log(prendas.reverse());

// ?<----  Ordenar de manera alfabetica y luego invertir  ---->

const prendas = ['pantalon', 'saco', 'blusa', 'musculosa', 'zara', 'abeja' ];

console.log(prendas.sort().reverse());


