// ?<----  Objeto literal  ---->

// const producto = {id: 1, nombre: "Arroz"}

// const alacena = [producto, { id: 2, nombre: 'fideos'}]

// alacena.push({id: 3, nombre: 'aceite'})

// console.log(alacena);

// ?<----    ---->

const productos =  []

const agregarProducto = () => {
    const id = prompt('Ingresa el id del producto')
    const nombre = prompt('Ingresa el nombre del producto')

    const producto = {id:id, nombre:nombre }
    // const producto = {id,nombre }
    productos.push(producto)
}

agregarProducto()