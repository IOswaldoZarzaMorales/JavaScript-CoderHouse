//?getElementById----------->Acceder a un elemento mediante su ID
let titulo = document.getElementById('title');
let contenedorTitulo = document.getElementById('title-container');
// console.log(titulo);
// console.log(contenedorTitulo);
//?getElementByClassName------>Acceder a un elemento mediante su clase
let pastas = document.getElementsByClassName('pasta');
//console.log(pastas);//?Nos mostrara una lista de nodos
// console.log(pastas[0].innerHTML);//?Acceder al contenido
// console.log(pastas[1].innerHTML);//?Acceder al contenido
// console.log(pastas[2].innerHTML);//?Acceder al contenido

// for(const pasta of pastas){
//     console.log(pasta.innerHTML);
// }
//?getElementByTagName------->Acceder a un nodo mediante su etiqueta
let articulos = document.getElementsByTagName('article')
// console.log(articulos);
// console.log(articulos[0].innerHTML);
// for(const article of articulos){
//     console.log(article);
// }
//?InnerText------>Modificar el nodo texto
// titulo.innerText= 'Hola coder!!';
// console.log(titulo.innerText);

//?InnerHTML-------->Modificar el elemento completo
// contenedorTitulo.innerHTML= "<h2>Hola comision<span>55985</span></h2>"//Insertando una nueva estructura
// contenedorTitulo.className= "class--especial"//Agregando clase

//?append--------->Inyectar elementos
// let subtitulo = document.createElement('h2');//Creando mi propio elemento
// subtitulo.innerHTML= '<span>Aguante la pizza</span>'//Agregando estructura
// document.body.append(subtitulo)//Inyectar elementos
//?remove--------->Eliminar un nodo
// titulo.remove()
// pastas[0].remove()

//?insertar elementos dinamicamente
// let zapatillas = ['nike', 'adidas', 'vans', 'converse'];
// let marcas = document.getElementById('marcas');
// for (const zapatilla of zapatillas){
//     let li = document.createElement('li')
//     li.innerHTML= zapatilla
//     marcas.appendChild(li)
// }


// let products = document.getElementById('productos')
// const productos = [
//     {id: 1, nombre: 'celular', precio: 15000},
//     {id: 2, nombre: 'televisor', precio: 1000},
//     {id: 3, nombre: 'heladera', precio: 3000}
// ]

// productos.forEach((producto)=>{
//     let contenedor = document.createElement('div');
//     contenedor.className= "card"
//     contenedor.innerHTML = `<span>ID: ${producto.id}</span>
//                             <h3>Producto: ${producto.nombre}</h3>
//                             <h4>Precio: ${producto.precio}</h4>`
//     products.appendChild(contenedor)
// })
//? <------Eventos------>
//?Eventos de click
let evento = document.getElementById('h1');
//?Primera forma de agregar eventos
// evento.addEventListener('click', clickTest)//Evento y funcion a ejecutar
// function clickTest (){
//     console.log('Test de click');
// }
//?Segunda forma de agregar eventos
// let clicks = 0;
// evento.onclick =() =>{
//     clicks ++
//     console.log('Cantidad de clicks: ' + clicks);
// }
//?Eventos del teclado
// let input = document.getElementById('input');
// input.onkeydown = () =>{
//     console.log('Apretaste una tecla');
// }

// input.onkeyup = () =>{
//     console.log('Apretaste una tecla');//Se ejecuta al soltar la tecla
// }
//?Contador
// let counter = document.getElementById('counter');
// let sumar = document.getElementById('plus-button');
// let restar = document.getElementById('minus-button');
// let contador = 0;

// sumar.onclick = () =>{
//     contador ++
//     counter.innerHTML = contador
//     restar.disabled = false
// }

// restar.onclick = () =>{
//     if(contador === 0){
//         restar.disabled = true
//     }else{
//         contador --
//         counter.innerHTML = contador
//     }
    
// }

//?Evento de cambio change
// let input = document.getElementById('search');
// const cervezas = ['rubia', 'negra', 'roja', 'ipa', 'apa'];
// input.onchange = () => {
//     const element = cervezas.find((cerveza) => cerveza === input.value);
//     console.log(element);
// }

//?Calculadorea de cuotas
let calcular = document.getElementById('calcular');
let cuotas = document.getElementById('cuotas');
let precio = document.getElementById('precio');

calcular.onclick = () => {
    let precioFinal = precio.value/cuotas.value;
    // console.log(precioFinal);
    let print = document.createElement('h3');
    print.innerHTML = `Son ${cuotas.value}cuotas de $${precioFinal}`
    document.body.appendChild(print)
}