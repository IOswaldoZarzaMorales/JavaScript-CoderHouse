// ?<----    ---->

// const jugador1 = 'messi';
// const jugador2 = 'dibu martinez';
// const jugador3 = 'di maria';
// const jugador4 = 'laurato martinez';
// const jugador5 = 'julian alvarez';

// console.log(jugador1, jugador2, jugador3, jugador4, jugador5);

// const seleccion = ['messi', 'dibu martinez', 'di maria', 'laurato martinez', 'julian alvarez'];

// console.log(seleccion);
// console.table(seleccion);
// console.log(seleccion[3]);
// console.log(seleccion.length);

// ?<----  .push() inserta un nuevo elemento al final del array  ---->

// const seleccion = ['messi', 'dibu martinez', 'di maria', 'laurato martinez', 'julian alvarez'];
// seleccion.push('dybala')
// console.log(seleccion);

// const seleccion = ['messi', 'dibu martinez', 'di maria', 'laurato martinez', 'julian alvarez', 'abel'];
// seleccion.push('dybala')


// ?<----  .unshift inserta un nuevo elemento al inicio del array  ---->
// seleccion.unshift('paredes');

// ?<----  .pop saca el ultimo elemento del array  ---->
// seleccion.pop();

// ?<----  .shift quita el primer elemento del array  ---->
// seleccion.shift();

// ?<----  .includes() devuelve booleano segun si lo encuentra o no  ---->
// console.log(seleccion.includes('messi'));
// console.log(seleccion.includes('paredes'));

// ?<----  .indexof busca elemento y nos da su indice  ---->
// console.log(seleccion.indexOf('messi'));
// console.log(seleccion.indexOf('paredes'));


// ?<----  .join() array a string separando los elementos con el caracter deseado  ---->

// console.log(seleccion.join(' - '));

// ?<----  .sort()ordena el array en orden alfabetico  ---->

// seleccion.sort()
// console.log(seleccion);


// ?<----  .reverse() invierte el orden del array  ---->
// seleccion.reverse()
// console.log(seleccion);

// ?<----  .sort().reverse()  ---->

// seleccion.sort().reverse()
// console.log(seleccion);

// ?<----  Objetos  ---->

// marca: phone
// color: gri
// marca: 48px
// almacenamiento: 128

// const celular = {
//     marca: 'phone',
//     color: 'gris',
//     camara: '48px',
//     almacenamiento: '128gb',
//     año: 2022
// }

// console.log(celular);
// console.log(celular.marca); //Para ver una propiedad 

// const jugador1 = {
//     jugador: 'messi',
//     posicion: 'delantero'
// }

// const jugador2 = {
//     jugador: 'dibu martinez',
//     posicion: 'arquero'
// }

// const jugador3 = {
//     jugador: 'di maria',
//     posicion: 'delantero'
// }

// const jugador4 = {
//     jugador: 'laurato martinez',
//     posicion: 'delantero'
// }

// const jugador5 = {
//     jugador: 'julian alvarez',
//     posicion: 'delantero'
// }

// console.log(jugador1);
// console.log(jugador1, jugador2);
// console.table(jugador1, jugador2);

// ?<----  array de bojetos  ---->

const jugador1 = {
    jugador: 'messi',
    posicion: 'delantero'
}

const jugador2 = {
    jugador: 'dibu martinez',
    posicion: 'arquero'
}

const jugador3 = {
    jugador: 'di maria',
    posicion: 'delantero'
}

const jugador4 = {
    jugador: 'laurato martinez',
    posicion: 'delantero'
}

const jugador5 = {
    jugador: 'julian alvarez',
    posicion: 'delantero'
}


const convocados = [jugador1, jugador2, jugador3, jugador4, jugador5]

// console.log(convocados);
// console.table(convocados);
// console.table(convocados[0]);

// for (const convocado of convocados){
//     console.table(convocado);
// }

// ?<----  array de bojetos 2 forma  ---->

// const convocados1 = [
//     {
//         jugador: 'messi',
//         posicion: 'delantero'
//     },
//     {
//         jugador: 'dibu martinez',
//         posicion: 'arquero'
//     },
//     {
//         jugador: 'dibu martinez',
//         posicion: 'arquero'
//     },
//     {
//         jugador: 'laurato martinez',
//         posicion: 'delantero'
//     },
//     {
//         jugador: 'julian alvarez',
//         posicion: 'delantero'
//     }

// ]

const addElement = () =>{
    const jugador = prompt('jugador a convocar');
    const posicion = prompt('posicion a jugar');

    const convocado = {
        jugador : jugador,
        posicion : posicion
    }
    convocados.push(convocado)
}

addElement()
console.log(convocados);