//?<--Arrays-->
// const jugador1 = 'messi';
// const jugador2 = 'dibu martinez';
// const jugador3 = 'di maria';
// const jugador4 = 'laurato martinez';
// const jugador5 = 'julian alvarez';

// console.log(jugador1, jugador2, jugador3, jugador4, jugador5);

//const seleccion = ['messi', 'dibu martinez', 'di maria', 'laurato martinez', 'julian alvarez'];

//console.log(seleccion[3]);//?Acceder a ese elemento segun su index

//console.log(seleccion.length);//?Conocer la longitud de los elementos de nuestros array
// console.table(seleccion);

//seleccion.push('dybala')//?Inserta un nuevo elemento al final array 

//seleccion.unshift('paredes')//?Insterta elemento al inicio de nustro array

//seleccion.pop()//?Sacar el ultimo elemento 

//seleccion.shift()//?Quita el primer elemento de nuestroa array 

//console.log(seleccion.includes('messi'))//?Busca un elemnto y devuelve un booleano segun si lo encuentra o  no 

//console.log(seleccion.indexOf('messi'));//?Busca elemento y nos da su indice

//console.log(seleccion.join('--|--|--'));//?Darle formato al array en un string 

//seleccion.sort()//?Ordena el array en orden alfabetico

//seleccion.reverse()//?Invierte el orden del array 

//seleccion.sort().reverse()//!Primero lo ordena alfabeticamente y despues lo invierte 

//console.log(seleccion);
//?<--Objetos-->

// const celular = {
//     marca: "samsung",
//     color: "negro",
//     camara: "48px",
//     almacenamiento: "128gb",
//     memoria:"8gb",
//     anio:2023
// }

// console.log(celular);
// console.log(celular.marca);

const jugador1 = {
    jugador: 'messi',
    posicion: "delantero"
}

const jugador2 = {
    jugador: 'dibu martinez',
    posicion: "arquero"
}

const jugador3 = {
    jugador: 'di maria',
    posicion: "delantero"
}

const jugador4 = {
    jugador: 'laurato martinez',
    posicion: "delantero"
}

const jugador5 = {
    jugador: 'julian alvarez',
    posicion: "delantero"
}

// const convocados1 = [
//     {
//         jugador: 'messi',
//         posicion: "delantero"
//     },
//     {
//         jugador: 'dibu martinez',
//         posicion: "arquero"
//     },
//     {
//         jugador: 'di maria',
//         posicion: "delantero"
//     },
//     {
//         jugador: 'laurato martinez',
//         posicion: "delantero"
//     },
//     {
//         jugador: 'julian alvarez',
//         posicion: "delantero"
//     }
// ]

const convocados = [jugador1,jugador2,jugador3,jugador4,jugador5];
// console.table(convocados[4]);

//?for (const convocado of convocados){
    //console.table(convocado);
//}

const addElement =() =>{
    const jugador = prompt('jugador a convocar');
    const posicion = prompt('posicion del jugador a convocar');

    const convocado ={
        jugador: jugador,
        posicion:posicion
    }

    convocados.push(convocado)
}

addElement()
console.log(convocados);