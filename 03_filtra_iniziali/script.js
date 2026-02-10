/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let namesL = []

// Dichiara la funzione qui.
function returnInitial(arr) { // function invocation
    for (let i = 0; i < arr.length; i++) {
    let initial = arr[i].charAt(0)
    if (initial === 'L') {
        namesL.push(arr[i])
    }
}
}

const returnInitial = arr => { // arrow function
    for (let i = 0; i < arr.length; i++) {
    let initial = arr[i].charAt(0)
    if (initial === 'L') {
        namesL.push(arr[i])
    }
}
} 

// Invoca la funzione qui e stampa il risultato in console
returnInitial(names)
console.log(namesL);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]