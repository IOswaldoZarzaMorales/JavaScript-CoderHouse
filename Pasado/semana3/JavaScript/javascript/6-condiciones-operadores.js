
// if(true){
//     //Entonces
//     console.log("vas a ver este mensaje");
// }

let tiempo = 'lluvioso' ;

// if (tiempo == "lluvioso" ){
//     console.warn('llevar paraguas')
// } 

// if (tiempo == "soleado" ){
//     console.warn('ponerse bloqueador')
// } 

// if (tiempo == "lluvioso" ){
//     console.warn('llevar paraguas')
// } else {
//     console.warn('ponerse bloqueador')
// } 

let edadMinima = 18;

// if(edadMinima >18){
//     console.log('Puede entrar a la disco');
// }else {
//     console.warn('vuelve a tu casa');
// }

// if(edadMinima < 18){
//     console.warn('Vuelve a tu casa');
// }else if (edadMinima >= 18) {
//     console.log('Puede entrar a la disco');
// }else{
//     //Otra condicion
// }


let lenguajeRequerido = 'javaScript';
let idiomaRequerido = 'español';

// if ((lenguajeRequerido == 'javascript') && (idiomaRequerido == 'ingles')){
//         console.log('Puede acceder al puesto');
// }else {
//     console.warn('Debes de cumplir con todos los requisitos para acceder');
// }

// if ((lenguajeRequerido == 'javascript') || (idiomaRequerido == 'ingles')){
//     console.log('Puede acceder al puesto');
// }else {
// console.warn('Debes de cumplir con al menos uno de los requisitos');
// }

if (((lenguajeRequerido == 'javascript') && (idiomaRequerido == 'ingles')) || (idiomaRequerido == 'frances')){
    console.log('Puede acceder al puesto');
}else {
console.warn('Debes de cumplir con al menos uno de los requisitos');
}