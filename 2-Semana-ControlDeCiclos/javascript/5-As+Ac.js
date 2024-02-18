//?Algoritmo simple mas Algoritmo condicional

// let entrada = prompt('Ingresa un nombre');

// let nombre = "BART";


// if(entrada==nombre){
//     alert('Fui yo');
// }else{
//     alert('Yo no fui')
// }

// let numeroPersonale = parseInt(prompt('Ingresa un numero'));

// if (numeroPersonaje==1){
//     alert('Elegiste a Homero');
// }else if(numeroPersonale==2){
//     alert('Elegiste a Marge');
// }else if(numeroPersonale==3){
//     alert('Elegiste a Bart');
// }else if (numeroPersonale==4){
//     alert('Elegiste a Magie');
// }else{
//     alert('Ingresa un numero valido del 1 al 4');
// }

// let numeroPersonale = parseInt(prompt('Ingresa un numero'));

// switch (numeroPersonale){
//     case 1:
//         alert('Elegiste a Homero');
//         break;
//     case 2:
//         alert('Elegiste a Marge');
//         break;
//     case 3:
//         alert('Elegiste a Bart');
//         break;
//     case 4:
//         alert('Elegiste a Magie');
//         break;
//     default:
//         alert('Ingresa un numero del uno al 4');
//         break;
// }

let cantidad = parseInt(prompt('Ingresa la cantidad de repeticiones'));

let texto = prompt('Ingresa el texto a repetir')

for(let i = 0; i < cantidad; i++){
    console.log(texto);
}

console.log('Espero haberlos iluminado.');


