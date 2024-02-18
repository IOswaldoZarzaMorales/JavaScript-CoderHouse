//! if y eslse
/*!
let condicion = true

if(condicion){
    //codigo a ejecutar si la condicion es verdadera
    console.log('La condicion es verdadera');
} */

// let fruta = 'mandarina'

// if (fruta == 'mandarina'){
//     console.log('Felicitaciones arranco el otoño, el otoño es epoca de mandarinas');
// } else if (fruta == 'sandia'){
//     console.log('Es verano, es epoca de sandia');
// } else {
//     console.log('Hay bananas, manzanas y naranjas todo año'); 
// }

//!Operador OR ||

// let fruta = 'mandarina'

// if(fruta = "sandia" || fruta == 'melon'){
//     console.log('Efectivamente es verano');
// }

// !Operador AND &&

// let mes = "enero";

// if(fruta == "sandia" && (mes == 'enero' || 'febrero' || 'marzo' || 'diciembre')){
//     console.log('Combinacion totalmente verando');
// }

// let edad = 18;

// if (edad >= 18){
//     console.log('Eres mayor de edad puedes entrar al antro');
// }else{
//     console.log('No puedes entrar a la vinoteca');
// }

//!Ciclo for

// for('desde'; 'hasta'; 'actualizacion'){
//Bloque de codigo a ejecutar
// }

//

// Tabla de multiplicar
// let numero = parseInt(prompt('Ingrese la tabla de multiplicar deseada'));
// console.log('Tabla de multiplicar del ' + numero);
// for (let i = 1; i <= 10; i++){
//     let resultado = i * numero;
//     console.log(numero + "x" + i + ": " + resultado)
// }

// console.log('Cuenta regresiva');
// for(let i =10; i>=0; i--){
//     console.log(i)
//     if(i==2){
//         console.log('Abortamos despegue')
//         break;
//     }
//     if(i==0){
//         console.log('Despegue!!');
//     }
// }

//?ciclo while

// let continuar = true;
// while(continuar){
//     let numero = parseInt(prompt('Ingrese la tabla de multiplicar deseada'));
//     console.log('Tabla de multiplicar del ' + numero);
//     for (let i = 1; i<= 10; i++){
//         let resultado = i*numero
//         console.log(numero+ "x1" + ": " + resultado);
//     }

//     let confirmacion = prompt('Desea hacer otro calculo si/no').toLocaleLowerCase();
//     if (confirmacion =="no"){
//         continuar = false
//         console.log('gracias');
//     }
// }

//*ciclo Do While

// let edad;
// do{
//     edad=parseInt(prompt('ingrese su edad'));
//     if(edad>=18){
//         console.log('Eres mayor puedes pasar');
//     }else{
//         console.log('Eres menor no puedes pasar y se cierra la puerta ')
//     }
// }while(edad>=18)

//?switch-case

// let menu = parseInt(
//     prompt(
//         "Ingresa 1 para ver su cuenta, ingrese 2 para extraccion, ingrse 3 para deposito, otro numero para salir"
//     )
// );
// switch (menu) {
//     case 1:
//         console.log("Total de la cuenta 3000");
//         break;
//     case 2:
//         console.log("Limite de extraccion 1000");
//         break;
//     case 3:
//         console.log("El limite deposito 500");
//     default:
//         console.log("retire su tarjeta");
// }

//?combinando ciclo while con ciclo swich

let continuar = true;
while (continuar) {
    let menu = parseInt(prompt("Ingresa 1 para ver su cuenta, ingrese 2 para extraccion, ingrse 3 para deposito, otro numero para salir"));

    switch (menu) {
        case 1:
            console.log("Total de la cuenta 3000");
            break;
        case 2:
            console.log("Limite de extraccion 1000");
            break;
        case 3:
            console.log("El limite deposito 500");
        default:
            console.log("retire su tarjeta");
    }

    let confirmacion = prompt("Desea hacer otra consulta si/no").toLocaleLowerCase();
    if (confirmacion == "no") {
        continuar = false;
        console.log("retire su tarjeta");
    } else if (confirmacion == "si"){
        alert('el cilo comienza de nuevo')
    }
}
