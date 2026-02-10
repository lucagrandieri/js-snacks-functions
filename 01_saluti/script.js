/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const userName = 'Mario';

// Dichiara la funzione qui.
function sayHi(name) { // function invocation
    return (`ciao ${name}`);
}

const sayHi = (name) => { // arrow function
    return `ciao ${name}`
} 

// Invoca la funzione qui e stampa il risultato in console
let hiToUserName = sayHi(userName)
console.log(hiToUserName);


//Risultato atteso se si passa 'Mario': // ciao Mario