// let entrada = prompt('Ingresa un nombre');

// let nombre = 'BART';

// if (entrada == nombre){
//     alert('FUI YO')
// }else{
//     alert('YO NO FUI')
// }

// let numeroPersonaje = prompt('Ingresa un Numero');

// if (numeroPersonaje == '1'){
//     alert('ELEGISTE A HOMERO');
// } else if (numeroPersonaje == '2'){
//     alert('ELEGISTE A MARGE');
// }else if (numeroPersonaje == '3'){
//     alert('ELEGISTE A LISA');
// }else if (numeroPersonaje == '4'){
//     alert('ELEGISTE A BART');
// }else if (numeroPersonaje == '6'){
//     alert('ELEGISTE A MAGIE');
// } else {
//     alert('Error numero invalido')
// }

// let numeroPersonaje = prompt('Ingresa un Numero');

// switch(numeroPersonaje){
//     case '1':
//         //Tareas a realizar 
//         alert('ELEGISTE A HOMERO');
//         break;
//     case '2':
//         //Tareas a realizar
//         alert('ELEGISTE A MARGE');
//         break;
//     case '3':
//         //Tareas a realizar 
//         alert('ELEGISTE A LISA');
//         break;
//     case '4':
//         //Tareas a realizar 
//         alert('ELEGISTE A BART');
//         break;
//         break;
//     case '5':
//         //Tareas a realizar 
//         alert('ELEGISTE A MAGIE');
//         break;
//     case '6':
//         //Tareas a realizar 
//         alert('ELEGISTE A FLANDERS');
//         break;
//     default:
//         //tareas a realizar
//         alert("ingresaste un numero no valido"); 
//         break;
// }

let cantidad = parseInt(prompt('Ingresa la cantidad de repeticiones'));

let texto = prompt('Ingresa el texto a repetir');

for (let i = 0; i < cantidad; i++){
    console.log(texto);
}

console.log('Espero haberlos iluminado')