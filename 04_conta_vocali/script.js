/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';

// Dichiara la funzione qui.
 function vowelsCounter(word1) { // function invocation
    let vowels = 0;
    for (let i = 0; i < word1.length; i++) {
    if (word1[i] === 'a' || word1[i] === 'e' || word1[i] === 'i' || word1[i] === 'o' || word1[i] === 'u') {
     vowels += 1
    }
}
    return vowels;
} 

const vowelsCounter = word1 => { // arrow function
    let vowels = 0;
    for (let i = 0; i < word1.length; i++) {
    if (word1[i] === 'a' || word1[i] === 'e' || word1[i] === 'i' || word1[i] === 'o' || word1[i] === 'u') {
     vowels += 1
    }
}
    return vowels;
}

// Invoca la funzione qui e stampa il risultato in console
vowelsCounter(word)
console.log(vowelsCounter(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)