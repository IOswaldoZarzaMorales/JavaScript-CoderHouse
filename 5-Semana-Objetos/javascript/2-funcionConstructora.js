// function Cat(name) {
//     this.name = name
//     this.sound= "Meow"
// }

// const cat = new Cat('Tom')

// console.log(cat.sound);

//?Funciones para crear nuevos objetos

//? Funciones constructoras antes
function Persona(nombre, edad, calle){
    this.nombre = nombre
    this.edad = edad
    this.calle = calle

    this.hablar = function(){
        console.log('Hola soy', this.nombre);
    }
}

const persona = new Persona('Homero', 36, 'Av siempre viva');

persona.hablar()

//?Funciones constructoras nuevas con clase
class Persona {
    constructor (nombre, edad , calle){
        this.nombre = nombre
        this.edad = edad
        this.calle = calle
    }
    saludar(){
        console.log('Hola', this.nombre);
    }
}

const persona = new Persona ('Homero', 39, 'Av. siempreviva');
persona.saludar()