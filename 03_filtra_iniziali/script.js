/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function returnInitial(arr, letter) { // function invocation
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === letter) {
            result.push(arr[i]);
        }
    }
    return result;
} 

const returnInitial = (arr, letter) => { // arrow function
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === letter) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
returnInitial(names, 'L')
console.log(returnInitial(names, 'L'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]