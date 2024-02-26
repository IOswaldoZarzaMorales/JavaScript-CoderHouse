//?Funcion para insertar elementos a nuestro 
// const paises = ['Argentina', 'Chile', 'Uruguay', 'Peru', 'Colombia', 'Venezuela', 'Bolivia'];

// const listaDesordenada =  document.querySelector('ul');

// paises.forEach(pais => {
//     const paisSudamerica = document.createElement('li');
//     paisSudamerica.innerText = pais;
//     listaDesordenada.appendChild(paisSudamerica);
// })

//?Insertar a travez del metodo push 
const paises = ['Argentina', 'Chile', 'Uruguay', 'Peru', 'Colombia', 'Venezuela', 'Bolivia'];

const listaDesordenada =  document.querySelector('ul');
const elementoPaises = [];

paises.forEach(pais => {
    const paisSudamerica = document.createElement('li');
    paisSudamerica.innerText = pais;
    elementoPaises.push(paisSudamerica)
})

listaDesordenada.append(...elementoPaises);