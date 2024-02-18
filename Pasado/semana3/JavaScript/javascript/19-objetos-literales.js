// ?<----  Objeto literal  ---->
// const perro ={
//     nombre: "maya",
//     color: "blanco",
//     castrado: "true"
// }

// ?<----  Recorrer el objeto literal  ---->

const productos = [
    {id: 1, nombre: 'arroz'},
    {id: 2, nombre: 'fideos'},
    {id: 3, nombre: 'pan'}
]

// ?<----  for of  ---->
for (const producto of productos){
    console.log(producto);
}