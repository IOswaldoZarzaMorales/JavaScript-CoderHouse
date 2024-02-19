class Cliente {
    static id = 0; //?Propiedad estatica

    constructor(nombre, direccion){
        //?Asignamos la propiedad estatica id a la propiedad publica con el mismo nombre dentro del constructor de la clase "Cliente"
        this.id = ++Cliente.id;
        //?Propiedad privada
        let email = ""; 
        //?Propiedades publicas
        this.nombre = nombre;
        this.direccion = direccion;
        //?Metodo publico para acceder a la propiedad privada
        this.getEmail = function () {
            return email;
        }
        //?Metodo publico para modificar la propiedad privada
        this.setEmail = function name(nuevoEmail) {
            email=nuevoEmail
        }
    }
}

//?Instanciamos (creamos) objetos de la clase 'Cliente

const cliente1 = new Cliente ('Miguel', 'Av San Juan 300');
const cliente2 = new Cliente ('Oswaldo', 'Av San Carlos 150');
const cliente3 = new Cliente ('Ivan', 'Av. Caseros 2000');

//?Acceso a las propiedades publicas del objeto "Cliente1"
console.log(cliente1.nombre);
console.log(cliente1.direccion);

//?Acceso a las propiedades privadas

console.log(cliente1.email);

//?Acceso a las funciones publicas

// console.log(cliente1.getEmail);

cliente1.setEmail('cliente1@gmail.com');

console.log(cliente1.getEmail());

//?Agregando propiedades de forma dinamica con el operador de punto o corchetes

cliente1.telefono = "12345";
cliente1['activo'] = true;

//?Cada cliente tiene un id dinamico 

console.table(cliente1);
console.table(cliente2);
console.table(cliente3);
