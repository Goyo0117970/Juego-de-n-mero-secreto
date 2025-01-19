let maximosIntentos = 3;
let numeroMaximoPosible =100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

   // console.log(typeoff(numeroUsuario));

    if (numeroUsuario === numeroSecreto) { 
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break;
    } else { 
        if (numeroUsuario > numeroSecreto) {
            alert('Número Secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos ++;
      //  palabrasVeces = 'Veces';
        if (intentos > maximosIntentos) { 
            alert(`Superaste el número de intentos ${maximosIntentos}`);
            break;
        }
    }
}

