/*
let condicion = true;

if(condicion){
    //codigo a ejecutar si la condicion es verdadera
    console.log('La condicion es verdadera');
}
*/

// let fruta = 'manzana';
// let mes = 'enero';
// let edad = 21

// if(fruta=='mandarina'){
//     console.log('Felicitaciones es epoca de mandarina');
// }else if(fruta=='sandia'){
//     console.log('Es epoca de sandia');
// }else{
//     console.log('No es epoca ni de sandias ni mandarinas');
// }

// //? Operador OR ||

// if(fruta == 'sandia' || fruta== 'melon'){
//     console.log('Efectivamente es verano');
// }

// //? Operador AND &&
// if(fruta == "sandia"  &&  mes == 'enero'){
//     console.log('Combinacion totalmente primaveral');
// }

//?Operador AND &&
// if(fruta=='sandia' && (mes == 'enero' || 'febrero' || 'marzo' || 'diciembre')){
//     console.log('cimbinacion totalmente verano');
// }

// if (edad >= 18){
//     console.log('Puedes entrar a la vinoteca');
// } else{
//     console.log('No puedes entrar a la discoteca');
// }

//?Ciclo FOR

// for('desde';'hasta';'actualizacion'){
//     //Bloque de codigo
// }

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//?Tabla de multiplicar
// let numero = parseInt(prompt('Ingrese la tabla de multiplicar deseada'));
// console.log('Tabla de multiplicar de  ' + numero);
// for (let i = 1; i<=10; i++){
//     let resultado = i*numero
//     console.log(numero+'x'+i+': '+resultado);
// }


// // let desea = prompt("Ingresa 1 para continuar 2 para cancelar")

// // if(desea="1"){
// //     let numero = parseInt(prompt('Ingrese la tabla de multiplicar deseada'));
// // console.log('Tabla de multiplicar de  ' + numero);
// // for (let i = 1; i<=10; i++){
// //     let resultado = i*numero
// //     console.log(numero+'x'+i+': '+resultado);
// // }
// // }

//? cuenta regresiva  
// console.log('Cuenta regresiva');
// for(let i = 10; i >=0; i--){
//     console.log(i);
//     if(i==2){
//         console.log('Abortamos el despegue');
//         break
//     } else if (i==0){
//         console.log('Despegue');
//     }
// }

//? ciclo while

// let continuar = true;
// while(continuar){
//     let numero = parseInt(prompt('Ingrese la tabla de multiplicar deseada'));
//     console.log('Tabla de multiplicar de  ' + numero);
//     for (let i = 1; i<=10; i++){
//         let resultado = i*numero
//         console.log(numero+'x'+i+': '+resultado);
//     }

//     let confirmacion = prompt('Desea hacer otro calculo si/no').toLocaleLowerCase();
//     if (confirmacion == 'no') {
//         continuar = false
//         console.log('Graciasv ');
//     }
    
// }

//?ciclo DO While

// let edad = ;
// do{
//     edad= parseInt(prompt('Ingresa tu edad'));
//     if (edad >= 18){
//         console.log('Eres mayor puedes pasar');
//     } else{
//         console.log('No puedes pasar retirate');
//     }
// } while(edad>=18)


//?SWITCH-CASE

// let menu = parseInt(prompt('Ingrese 1 para ver su cuenta, ingrese 2 para extraccion, ingrese 3 para deposito, otro numero para salir'))

// switch(menu){
//     case 1 :
//         console.log('Total de la cuenta 3000');
//         break
//     case 2 :
//         console.log('El limite del retiro es de 2000');
//         break
//     case 3 :
//         console.log('Limite de depositos 500');
//         break
//     default:
//         console.log('Retire su tarjeta');
//         break
// }

//?Combinacion de todas las estructuras de control vistas

let continuar = true;
while(continuar){
    let menu = parseInt(prompt('Ingrese 1 para ver su cuenta, ingrese 2 para extraccion, ingrese 3 para deposito, otro numero para salir'))
    
    switch(menu){
            case 1 :
                console.log('Total de la cuenta 3000');
                break
            case 2 :
                console.log('El limite del retiro es de 2000');
                break
            case 3 :
                console.log('Limite de depositos 500');
                break
            default:
                console.log('Retire su tarjeta');
                break
        }
    
    let confirmacion = prompt('Desea hacer otro calculo si/no').toLocaleLowerCase();
    if (confirmacion == 'no') {
        continuar = false
        console.log('Retire su tarjeta');
    }
    
}