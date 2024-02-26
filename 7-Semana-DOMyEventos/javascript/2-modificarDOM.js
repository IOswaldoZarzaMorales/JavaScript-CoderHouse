//?Reasignando el contenido de nuestro DOM
// let titulo = document.getElementById('titulo');
// console.log(titulo.innerText);//Trayendo el contenido de ese nodo
// titulo.innerText = 'Hola Coder'; //Reasignando internamente
// console.log(titulo.innerText);
//?Agregando contenido a nuestros nodos
// let container = document.getElementById('contenedor')
// container.innerHTML = '<h2>Hola mundo</>;<p>Lorem ipsum</p>';//Reasignando en el dom
//?Metodo create  element
// let contenedor = document.createElement('div');//Creando un nuevo elemento
// contenedor.innerHTML = '<h2>!Hola soy nuevo</h2>';
// document.body.append(contenedor);//Insertando
//?Eliminar nodos existentes
// let parrafo = document.getElementById('parrafo1');
// console.log(parrafo.innerHTML);
// parrafo.remove();//Removiendo
// console.log(parrafo.innerHTML);
//?Elimiar elementos de un array de nodos
// let paises = document.getElementsByClassName('Clases');
// paises[0].remove();
//?Modificando evalores de nuestros inputs
document.getElementById('nombre').value = "homero";
document.getElementById('edad').value = 39;
