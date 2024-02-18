//?Ciclos for

// for(let i=0; i<10;i++){
//     console.log('Iteracion N ' + i);
// }


//?Break
// for(let i = 0; i<=10; i++){
//     //Si la variable i es igual a 5 interrumpe el for.
//     if(i==5){
//         console.warn('Iteracion interrumpida en el ciclo', i , 'Por la clausula BREAK');
//         break
//     }

//     alert(i);
// }

//?Continue

for(let i = 0; i<=10; i++){
    //Si la variable i es igual a 5 interrumpe el for.
    if(i==5){
        console.warn('Iteracion saltada en el ciclo', i , 'Por la clausula CONTINUE');
        continue
    }

    alert(i);
}