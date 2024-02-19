// const celular1 ={
//     //?clave y valor 
//     modelo: 'Galaxy s21',
//     marca: 'samsung',
//     precio: 1000
// }

// const celular2={
//     modelo: 'Phone',
//     marca: "apple",
//     precio: 1200
// }

// console.log(celular1.modelo, celular2.precio);

//?Funcion constructora hacer de plantilla

// function Celular(modelo, marca, precio) {
//     this.modelo= modelo
//     this.marca= marca
//     this.precio= precio
// }

//?Constructor a travez de una clase 

// const precioDolar = 1250

// class Celular{
//     constructor(modelo, marca, precio ){
//         this.modelo= modelo,
//         this.marca= marca,
//         this.precio= precio
//     }
//     enPesos=()=>{
//         this.precio = this.precio*precioDolar
//         console.log("El precio en presos" + this.precio);
//     }
// }


// //?Instanciar
// const celular1 = new Celular('Galaxis21', 'Samsung',1000)
// const celular2 = new Celular('Phone 14 pro', 'Apple',1200 )
// console.log(celular1, celular2);
// celular1.enPesos();

//?Constructor a travez de carga de datos del usuario
const precioDolar = 1250
const productos =[]

class Celular{
    static id = 0
    constructor(modelo, marca, precio ){
        this.id = ++Celular,
        this.modelo= modelo,
        this.marca= marca,
        this.precio= precio
    }
}

cargaProductos=()=>{
    let cargaMarca = prompt('Ingrese la marca del celular');
    let cargaModelo = prompt('ingrese el modelo del celular');
    let cargaPrecio = parseInt(prompt('Ingrese el precio del modelo'));

    const celular = new Celular(cargaModelo, cargaMarca, cargaPrecio);
    productos.push(celular)
    console.log(celular);

}
// cargaProductos()
// console.log(productos);
//?

verProductos = () =>{
    if (productos.length=== 0){
        console.log('No hay productos añadidos');
    } else{
        for(producto of productos){
            console.log(productos);
        }
    }
}


let menu = parseInt(prompt('Bienvenido! Ingrese 1 para ver el catalogo \n Ingrese 2 para cargar un prducto \n Ingrese 3 para salir '))
while (menu !== 3) {
    switch (menu) {
        case 1:
            verProductos()
            break;
        case 2:
            cargaProductos()
            break;
        default:
            alert('Opcion incorrecta vuelva a intentarlo ')
            break;
    }
    menu = parseInt(prompt('Bienvenido! Ingrese 1 para ver el catalogo \n Ingrese 2 para cargar un prducto \n Ingrese 3 para salir '))
}

