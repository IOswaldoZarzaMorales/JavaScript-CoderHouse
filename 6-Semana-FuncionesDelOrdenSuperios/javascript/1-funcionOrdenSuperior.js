//?Funcion que retorna otra funcion

// function mayorQue(n) {
//     return (m) => m >n
// }

// const mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(8));

//?

// const numeros = [1, 2, 3, 4];

// let total = 0;

// function acumular(num) {
//     total += num
// }

// porCadaUno(numeros, acumular)
// console.log(total);
// porCadauno(numeros, console.log)

//?

// const numeros = [1, 2, 3, 4]

// const duplicados = []

// porCadaUno(numeros, (el) => {
//     duplicados.push(el*2)
// })

// console.log(duplicados);

//?Metodos 

// const cursos = [
//     {nombre: 'JavaScript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000}
// ]

// const resultado1 = cursos.find(el => el.nombre === 'ReactJS')
// const resultado2 = cursos.find(el => el.nombre === 'DW')

// console.log(resultado1);
// console.log(resultado2);

//?

const cursos = [
    {nombre: 'JavaScript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado1 = cursos.filter(el => el.nombre.includes('JS'))
const resultado2= cursos.filter(el => el.precio<14000)

console.log(resultado1);
console.log(resultado2);

console.log(cursos.some(el => el.nombre == "Desarrollo Web"));
console.log(cursos.some(el => el.nombre == "VueJS"));