//?Principios fundamentales de las funciones
        //*DRY Dont Repeat Yourself No te repitas a ti mismo
        //*KISS Kepp It Simple Stupid Mantelo Simple Stupido jajaja
        //*YAGNI You Aren't Gonna Need It Si no lo Necesitas borralo 

//?Funcion declarada
// function miFuncion (){
//     console.log('UNO');
//     console.log('DOS');
// }

// miFuncion();


// //?Funcion Retornar
// function retornar(){
     // return 20;
//     let a = 10;
//     let b = 20;
//     return a*b;
// }

// console.log(retornar());

//?Funcion contenida dentro de una variable

// function retornarString(){
//     console.log('Uno');
//     console.log('Dos');
//     return 'La funcion  devuelve un string de texto';
// }

// let devuelveValor = retornarString();

// console.log(devuelveValor);

//?Funcion que devuelve parametros

// function saludar(nombre,edad){
//     console.log('Hola, mi nombre es ' + nombre + " y tengo " + edad + ' años. ' );
// }

// saludar('flor', 37);

//?Funciones expresadas
            //No puede ejecutar algo que no se ha inicializado

const funcionExpresada= function(){
    console.log('Soy una funcion expresada');
}

funcionExpresada();
