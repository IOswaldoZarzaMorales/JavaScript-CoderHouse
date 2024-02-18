
//?Funcion anonima ----> Primero tiene que ser declarada 

// const multiplicarXdos = function(numero){
//     console.log(numero*2);
// }

// multiplicarXdos(3)

//?Funciones flecha =>

// const multiplicarXdos =(numero)=>{
//     console.log(numero*2);
// }

//?Funcion flecha simplificacion

// const multiplicarXdos = numero => {
//     console.log(numero*2);
// }

//?Funcion flecha todavia mas simplificada 

// const multiplicarXdos = numero => numero*2;

// const sumar = (numeroA, numeroB) => numeroA + numeroB;

const saludar = (nombre)=>{
    console.log('Hola  ' +  nombre);
}


const saludar = nombre => console.log('Hola  ' + nombre);

saludar('Flor')