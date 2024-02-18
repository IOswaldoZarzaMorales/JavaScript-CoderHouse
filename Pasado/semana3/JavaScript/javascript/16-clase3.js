
// function saludar () {
//     console.log('Hola mundo');
// }

// saludar()

// function sumar () {
//     let numeroA = 10;
//     let numeroB = 20;
//     let resultado = numeroA + numeroB;

//     return resultado
// }
// console.log(sumar());

// function sumar (numeroA, numeroB) {
//     let resultado = numeroA + numeroB;

//     return resultado
// }
// console.log(sumar(30, 5));

// let primerNumero = parseInt(prompt('ingrese el primer numero'));
// let segundoNumero = parseInt(prompt('ingrese el segundo numero'));


// function restar (numeroA, numeroB) {
//     let resultado = numeroA - numeroB;

//     return resultado
// }
// console.log(restar(primerNumero, segundoNumero));

// function calcularIva (precio){
//     let precioFinal = precio*1.21

//     return precioFinal
// }

// console.log(calcularIva(100));
// let precioConIva = calcularIva(100);
// console.log('El precio final con IVA es ' + precioConIva)

// funcion declarada
// console.log(calcularIva(100));
// function calcularIva (precio){
//     let precioFinal = precio*1.21

//     return precioFinal
// }

// funcion expresada
// console.log(calcularIva(100));
// const calcularIva = function (precio){
//     let precioFinal = precio*1.21

//     return precioFinal
// }


// const calculadoraDel10 = function (primerNumero){
//     console.log(primerNumero*10);
// }
// calculadoraDel10(5)

// const calculadoraDel10 = (primerNumero) =>{
//     console.log(primerNumero*10);
// }

// const calculadoraDel10 = primerNumero =>{
//     console.log(primerNumero*10);
// }

// const calculadoraDel10 = primerNumero => console.log(primerNumero*10);

// calculadoraDel10(20)

// const multimplicar =(primerNumero, segundoNumero) => primerNumero*segundoNumero
// console.log(multimplicar(10, 20));

// const saludo = comision => console.log("Esta es  la comision " + comision);
// saludo(55985)

//Calculadora basica (+, -, *, /)

function sumar() {
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado);
}

function restar() {
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado);
}

function multimplicar() {
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado);
}

function dividir() {
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado);
}

let opcion = parseInt(prompt('Eliga una opcion: \n 1-sumar \n 2-sumar \n 3-multiplicar \n 4-dividir \n 5-salir'));

while(opcion!==5){
    switch(opcion){
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multimplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert('opcion incorrecta')
            break
    }
    opcion = parseInt(prompt('Eliga una opcion: \n 1-sumar \n 2-sumar \n 3-multiplicar \n 4-dividir \n 5-salir'));
}