
//?Scope global

// let auto1 = 'Descapotable';
// let auto2 = 'Mustang';
// let auto3 = 'Camaro';

//?Scope local

// function pasear (){
//     let otroAuto = 'Mercedes';
//     console.log('Paseando en el  ' + otroAuto);
// }

// console.log(otroAuto); ----->No le alcanza ya que tiene un scope local
// pasear();

// let auto = 'Descapotable'

// function pasear (){
//     var otroAuto = 'Mercedes';
//     if (true){
//         let otroAutoMas = 'Tesla';
//     }

//     console.log('paseando en el  ' + otroAuto);
//     console.log('paseando en el  ' + otroAutoMas);
// }

// console.log(O);

//?Funcion detro de otra funcion

let auto = 'Descapotable';

function pasear() {
    auto = 'Mercedes';
    function lavar() {
        console.log('Enviar a lavar el ' + auto);
    }
    lavar()
    console.log('Paseando en el ' + auto);
}

pasear()