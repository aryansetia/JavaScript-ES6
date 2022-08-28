// if (false) { 
//     var example = 5;
// }

// console.log(example);

/* var uses hoisting that means all the declarations moves to the top of current scope
var example;
if(false) {
    example = 5;
}

console.log(example);
*/

// if (false) {
//     let example = 5;
// }

// console.log(example)

// would work (as we can modify objects and arrays but cannot overwrite the primitive data types values)
// const example = [];
// example.push(5);
// console.log(example);

// would not work
const example = 5;
example = 21; 
console.log(example);