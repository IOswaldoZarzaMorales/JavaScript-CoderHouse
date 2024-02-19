//?Las funciones sonde acceso global
// function f1(){
//     return this
// }
//?Metodos forman parte del objeto y no siempre tienen que retornanr un valor 
// function Persona(nombre, edad, direccion){
//     this.nombre = nombre
//     this.edad = edad
//     this.direccion = direccion
// }

// const cadena = "Hola Coder";

// console.log(cadena.length);

// console.log(cadena.toLocaleLowerCase());

// console.log(cadena.toUpperCase());
//*Antiguamente de esta forma se creaban objetos 

//?Constructor

// function Persona(nombre, edad, calle){
//     this.nombre = nombre
//     this.edad = edad
//     this.calle = calle

//     this.hablar = function() {
//         console.log('Hola soy', this.nombre);
//     }

// }

//?Instanciando

// const persona1 = new Persona ('Homero', 39, 'Av. Siempre viva 742');
// const persona2 = new Persona ('Marge', 3, 'Av. Siempre viva 742');

//?Aplicando metodos 

// persona1.hablar()
// persona2.hablar()

//*ECMA6 Se crearon clases que son equivalentes a los constructores

class Persona {
    constructor(nombre, edad, calle){
        this.nombre = nombre
        this.edad = edad
        this.calle = calle 
    }

    hablar(){
        console.log('Hola soy', this.nombre);
    }
}

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742')
console.log(persona1);
persona1.hablar()

//*Crearemos un objeto por cada producto

const IVA = 1.21

class Producto{
    constructor(name, precio){
        this.name = name.toUpperCase()
        this.precio= parseInt(precio)
        this.vendido = false
    }

    sumaIva(){
        return this.precio = this.precio * IVA
    }

    vender(){
        this.vendido = true
    }
}

const producto1 = new Producto('Arroz', 125);
const producto2 = new Producto('Frijol', 50);

console.log(producto1.sumaIva()); 
console.log(producto2.sumaIva()); 
console.log(producto1.vender()); 

