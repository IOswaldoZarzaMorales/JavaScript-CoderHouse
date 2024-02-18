//alert('Hola mundo');
//Variables
let numeroMaximoPosible = 10 ;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

console.log(numeroSecreto);
alert(`Tienes ${maximosIntentos} intentos `)

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre el 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    //Este codigo realiza comparacion
    if (numeroUsuario == numeroSecreto) {
        //si se cumple la condicion 
        //alert(`acertaste, el numero: ${numeroUsuario}  Lo hiciste en ${intentos} ${palabraVeces}`);
        alert(`acertaste, el numero: ${numeroUsuario}  Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        } else {
            alert('El numero secreto es mayor ')
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++ ;
        //palabraVeces = "veces";
        
        if (intentos > maximosIntentos){
            alert(`llegaste al numero maximo de ${maximosIntentos}intentos`)
            break;
        }
        // si no se cumple la condicionl
        // alert('sigue intentando');
    }
}