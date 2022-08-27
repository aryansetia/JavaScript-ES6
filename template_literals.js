let word1 = 'Hello';
let word2 = 'World';

// const fullName = word1 + ' ' + word2; 
const fullName = `${word1} ${word2}`;

// let example = 'Hello \n' + 'World';
let example = `${word1} 
${word2}`
document.getElementById('example').innerText = example
console.log(fullName);
