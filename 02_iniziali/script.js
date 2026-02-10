/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const nameInitials = []

// Dichiara la funzione qui.
function arrayToInitial(arr) { // function invocation
    for (let i = 0; i < arr.length; i++) {
        let initial = arr[i].charAt(0)
        nameInitials.push(initial)
    }
} 

const arrayToInitial = arr => { // arrow function
    for (let i = 0; i < arr.length; i++) {
        let initial = arr[i].charAt(0)
        nameInitials.push(initial)
    }
}

// Invoca la funzione qui e stampa il risultato in console
arrayToInitial(names)
console.log(nameInitials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]