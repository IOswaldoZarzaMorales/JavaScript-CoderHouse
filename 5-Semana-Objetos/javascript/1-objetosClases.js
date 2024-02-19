// const nombre = 'Homero';

// const edad = 39;

// const calle = 'Av. Siempreviva 742';

// //?El siguiente es un objeto

// const persona = {

//     nombre : 'Homero',
    
//     edad: 39,

//     calle: "Av. siempreviva 742"
// }

// console.log(persona.edad);

// console.log(persona["calle"]);

// //?Reasignar propiedad 

// persona.edad = 40;

// console.log(persona.edad);

//?Plantilla creacion de funciones clases 

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
// persona()