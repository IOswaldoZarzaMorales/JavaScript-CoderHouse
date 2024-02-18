alert('Bienvenido al mercado "Nativitas" ')

const productos = {
    frutas: [
        { nombre: 'Manzana', precio: 3 },
        { nombre: 'Platano', precio: 2 },
        { nombre: 'Naranja', precio: 1 }
    ]
};

function mostrarProductos(categoria, productos) {
    console.log('Categoría: ' + categoria);
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        console.log('- ' + producto.nombre + ': $' + producto.precio);
    }
    console.log('\n');
}

alert('Acontinuacion se muestran nuestros prodcutos disponibles')

mostrarProductos('Frutas', productos.frutas);


function agregarProductos() {
    const frutasSeleccionadas = [];

    while (prompt('¿Quieres agregar una fruta al carrito? Si/No').toLowerCase() === 'si') {
        const nombreFruta = prompt('Ingresa el nombre de la fruta que deseas agregar:').toLowerCase();
        const frutaEncontrada = productos.frutas.find(fruta => fruta.nombre.toLowerCase() === nombreFruta);

        if (frutaEncontrada) {
            frutasSeleccionadas.push(frutaEncontrada);
            alert('Has añadido ' + frutaEncontrada.nombre + ' al carrito.');
        } else {
            alert('Fruta no encontrada en la lista.');
        }
    }

    return frutasSeleccionadas;
}

const frutasEscogidas = agregarProductos();

if (frutasEscogidas.length > 0) {
    console.log('Frutas en el carrito:');
    for (const fruta of frutasEscogidas) {
        console.log('- ' + fruta.nombre);
    }
} else {
    console.log('No has agregado ninguna fruta al carrito.');
}

alert('Gracias por comprar en el mercado "Nativitas" regresa pronto');

