/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
function hourBasedSalute(word) { // function invocation
    const time = new Date().getHours()
    if (time < 13) {
        return `buongiorno ${word}`
    } else if (time < 18) {
        return `buon pomeriggio ${word}` 
    } else {
        return `buonasera ${word}`
    }
}

const hourBasedSalute = word => { // arrow function
    const time = new Date().getHours()
    if (time < 13) {
        return `buongiorno ${word}`
    } else if (time < 18) {
        return `buon pomeriggio ${word}` 
    } else {
        return `buonasera ${word}`
    }
}

// Invoca la funzione qui e stampa il risultato in console
hourBasedSalute(name)
console.log(hourBasedSalute(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.