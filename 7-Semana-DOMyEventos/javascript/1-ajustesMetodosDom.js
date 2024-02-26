//?Accediendo al DOM mediante id
// let div = document.getElementById('app');
// let parrafo1 = document.getElementById('parrafo1');
// console.log(div);
// console.log(parrafo1);
//?Accediendo al DOM mediante classe
// let paises = document.getElementsByClassName('paises')
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);
//?Accediendo al DOM mediante etiquetas
// let contenedores = document.getElementsByTagName('div')
// console.log(contenedores);
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);
// console.log(contenedores[3].innerHTML);
//?Recooriendo el array de nuestros elementos
// let paises = document.getElementsByClassName('paises')
// let contenedores = document.getElementsByTagName('div')

// for (const pais of paises){
//     console.log(pais.innerHTML);
// }

// for (const contenedor of contenedores){
//     console.log(contenedor.innerHTML);
// }

//?Metodos actuales para el trabajo en nodos
// let elementoP = document.querySelector('p');//!Traera al primer elemento que coincida con el parametro que le dimos
// console.log(elementoP);
// let elementoP2 = document.querySelector('p.blue-text');//Asignando clase extra a nuestro elemento llamado
// console.log(elementoP2);
//?Nos traera todos los elementos coincidentes en un array 
// let elementoP = document.querySelectorAll('p')
// console.log(elementoP);

let pendientes = document.querySelectorAll('li.paises');
console.log(pendientes);
