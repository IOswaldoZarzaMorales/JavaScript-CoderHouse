//?<---->

// const producto = {id : 1, nombre: 'arroz'};

// const alacena = [producto, {id : 2, nombre: 'Fideos'}];

// alacena.push({id:  3, nombre: 'Frijoles'})

// console.table(alacena);

//?<---->

const productos = []

const agregarProductos = () =>{
    const id = parseInt(prompt('Ingresa el id del producto'));
    const nombre = prompt('Ingresa el nombre del producto');

    const producto = {id: id, nombre: nombre}

    productos.push(producto)

}

// agregarProductos()



let opcion = parseInt(prompt('Elija una opcion: \n 1-agregar objeto \n 2-salir'));

while(opcion !== 2){
    switch(opcion){
        case 1 : 
            agregarProductos()
            break
        default:
            alert('opcion incorrecta')
            break
    }
    opcion = parseInt(prompt('Elija una opcion: \n 1-agregar objeto \n 2-salir'));
}

console.table(productos);
