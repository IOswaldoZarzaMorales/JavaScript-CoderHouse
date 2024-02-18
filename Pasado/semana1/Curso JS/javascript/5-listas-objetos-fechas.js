//?Listas, array o arreglo --->Conjunto de variables puestas en orden

const lista1 = [1,'hola', true, undefined, null]
const lista2 = new Array(1,'hola', true, undefined, null);
const lista3 = new Array(3);
lista3[0] = 'Soy el primer elemento, index 0';
const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//?Objetos

const movil ={ //Const por que el objeto se mantiene
    altura: 10,
    anchura: 5,
    marca: 'xiaomi',
    isWhite: false,
    //Se pueden tener listas dentro de objetos
    contactos: ['Gorka','Martin', 'Raul'],
    //Un objeto puede tener objetos dentro
    tarjeta:{
        marca:'SandStick',
        almacenamiento: 64
    },
    'altura-tarjeta' : 4
}
movil.anio = 2019;
movil.marca = 'samsun';//Reasignando

console.log(movil.anio);
console.log(movil.tarjeta.almacenamiento);



//?Fechas
//Librerias de aopyo Moment.js
const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10)//Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date('march 25 2020')
console.log(fecha_cadena);

const fecha_valores = new Date(2024, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia);
console.log(mes);
console.log(anyo);
console.log(dia, mes, anyo);
