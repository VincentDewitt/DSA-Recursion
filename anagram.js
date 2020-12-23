'use strict'; 

function anagram(word) {
    let results = []; // store the results in an array
    // base case
    if (word.length <= 1) {
        return [word];
    }
    const str = word.split('');  
    str.forEach((letter, idx) => {
        let charLeft = [...str.slice(0, idx), ...str.slice(idx + 1)].join('');
        const permutations = anagram(charLeft);
        permutations.forEach(permutation => {
            results.push(letter + permutation);
        });
    });
    return results;
}

console.log(anagram('east'));