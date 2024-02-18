//?Condicionales y  Operadores

// if(true){
//     //entonces
//     console.log('Vas a ver este mensaje');
// }

// if(llueve){
//     //llevar paraguas
// }

let tiempo = 'lluvioso';

// if(tiempo == 'lluvioso'){
//     console.warn('Llevar paraguas');
// }

// if(tiempo ==  'soleado'){
//     console.warn('Ir con una camisa ligera');
// }

// if(tiempo == 'lluvioso'){
//     console.warn('Llevar paraguas');
// }else{
//     console.log('llevar una camisa ligera');
// }

let edadMinima = 18;

// if(edadMinima >= 18){
//     console.log('Puede entrar a la disco');
// }else{
//     console.warn('No puedes entrar no cumples con la edad minima');
// }

// if(edadMinima < 18){
//     console.warn('No puedes entrar no cumples con la edad minima');
// }else if (edadMinima>= 18){
//     console.log('Puede entrar a la disco');
// }else{
//     console.log('Por favor ingresa un dato valido');
// }

// ?operadores logicos

let lenguajeRequerido = 'javascript';
let idiomaRequerido = 'ingles';

// if ((lenguajeRequerido=='javascript')&&(idiomaRequerido=='ingles')){
//     console.log('Puede acceder al puesto');
// }else{
//     console.warn('Debes cumplir con todos los requeisitos para acceder');
// }

// if ((lenguajeRequerido=='javascript')||(idiomaRequerido=='ingles')){
//     console.log('Puede acceder al puesto');
// }else{
//     console.warn('Debes cumplir con alguno de los requisitos para acceder');
// }

if (((lenguajeRequerido=='javascript')&&(idiomaRequerido=='frances'))||(idiomaRequerido=='ingles')){
    console.log('Puede acceder al puesto');
}else{
    console.warn('Debes cumplir con alguno de los requisitos para acceder');
}