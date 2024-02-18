
//?Funcion normal

// function saludar (){
//     console.log('Hola soy una funcion');
// }

// saludar()

// ?<------- ------->

// function sumar (){
//     let numeroA = 10;
//     let numeroB = 20;
//     let resultado = numeroA*numeroB;
//     return resultado
// }

// console.log(sumar());

// ?<------- ------->

// let primerNumero = parseInt(prompt('Ingresa el primer numero'));
// let segundoNumero = parseInt(prompt('Ingresa el segundo numero'));

// function sumar(numeroA, numeroB){
//     let resultado = numeroA + numeroB

//     return resultado
// }
// console.log(sumar(primerNumero, segundoNumero));

// ?<------- ------->


// let calcular = parseInt(prompt('Ingresa el precio a calcular'))

// function calcularIva(precio){
//     let precioFinal = precio*1.21

//     return precioFinal
// }

// console.log(calcularIva(100));
// let precioConIva = (calcularIva(100))
// console.log('El precio final  ' + precioConIva);

// ?<------- Funcion declarada ------->


// console.log(calcularIva(100));
// function calcularIva(precio){
//     let precioFinal = precio*1.21

//     return precioFinal
// }

// ?<------- Funcion expresada ------->

// const calcularIva = function (precio) {
//     let precioFinal = precio*1.21

//     return precioFinal
// }

// console.log(calcularIva(100));

// ?<-------  ------->

// const calculadoraDel10 = function(primerNumero){
//     console.log(primerNumero*10);
// }
// calculadoraDel10(5)

// ?<------- Funciones Flecha ------->

// const calculadoraDel10 = (primerNumero) => {
//     console.log(primerNumero*10);
// }

// ?<------- Funciones Flecha ------->

// const calculadoraDel10 = primerNumero => {
//     console.log(primerNumero*10);
// }

// ?<------- Funciones Flecha ------->

// const calculadoraDel10 = primerNumero => console.log(primerNumero*10);

// const multiplicar = (primerNumero, segundoNumero) => primerNumero*segundoNumero
// console.log(multiplicar(5,10));

// const saludo = comision => console.log('Esta es la comosion  ' + comision);

// saludo(5589)


// ?<------- Calculadora basica  ------->

function sumar (){
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA + numeroB
    alert(numeroA + ' + ' + numeroB + ' = ' + resultado)
}
// sumar()

function restar (){
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA - numeroB
    alert(numeroA + ' - ' + numeroB + ' = ' + resultado)
}
// restar()

function multiplicar (){
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA * numeroB
    alert(numeroA + ' * ' + numeroB + ' = ' + resultado)
}
// multiplicar()

function dividir (){
    let numeroA = parseInt(prompt('Ingrese el primer numero'));
    let numeroB = parseInt(prompt('Ingrese el segundo numero'));
    let resultado = numeroA / numeroB
    alert(numeroA + ' / ' + numeroB + ' = ' + resultado)
}
// dividir()

let opcion = parseInt(prompt('Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Salir'));

while(opcion !==5){
    switch(opcion){
        case 1 : 
            sumar()
            break
        case 2 : 
            restar()
            break
        case 3 : 
            multiplicar()
            break
        case 4 : 
            dividir()
            break
        default:
            alert('opcion incorrecta')
            break
    }
    opcion = parseInt(prompt('Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Salir'));
}



