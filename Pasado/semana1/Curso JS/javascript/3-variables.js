// ?<----  Alcance de la variable var  ---->
var variable = 'Hola soy una variable var ';

for (var i=0; i<3; i++){
    var variable = 'Soy la segunda variable var';
}

console.log(variable);


// ?<----  Alcance de la variable let  ---->
let variablelet = 'Hola soy una variable let  ';

for (var i=0; i<3; i++){
    let variablelet = 'Soy la segunda variable let';
}

console.log(variablelet);


//? <----  typeof  ---->
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof variable);//Nos ayuda a saber de que tipo es la variable
