// let tiempo;

// switch(tiempo){
//     case 'lluvioso':
//         //Tareas a realizar 
//         break;
//     case 'ventoso':
//         //Tareas a realizar 
//         break;
//     case 'soleado':
//         //Tareas a realizar 
//         break;
//     case 'nevado':
//         //Tareas a realizar 
//         break;
//     default:
//         //tareas a realizar
//         break;
// }

let tiempo = prompt('Como esta el tiempo en tu ciudad es: lluvioso ventoso soleado o nevado');

switch(tiempo){
    case 'lluvioso':
        //Tareas a realizar 
        alert('lleva paraguas');
        break;
    case 'ventoso':
        //Tareas a realizar
        alert('lleva sueter');
        break;
    case 'soleado':
        //Tareas a realizar 
        alert('ponte bloqueador');
        break;
    case 'nevado':
        //Tareas a realizar 
        alert('abrigate bien');
        break;
    default:
        //tareas a realizar
        alert("ingresaste un dato no valido"); 
        break;
}