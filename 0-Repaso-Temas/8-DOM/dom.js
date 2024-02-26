//?Accediendo al dom
//const contenido = document.getElementById('contenido');//Acceder a travez de un id
//const parrafos = document.getElementsByClassName('parrafo');//Acceder atravez de las etiquetas semanticas
//console.log(contenido);
//console.log(parrafos);

const contenido = document.querySelector("#contenido");//Permite llamar a travez de id, clase 
const parrafos = document.querySelectorAll('.parrafo')//to dos los elementos que coincidan con la peticion
console.log(contenido);
console.log(parrafos);