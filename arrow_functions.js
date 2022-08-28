function add(...nums) {
    // let total = nums.reduce(function(x,y){
    //     return x+y;
    // })

    // equivalent arrow function
    let total = nums.reduce((x,y) => x+y);
    console.log(total);
}

sum = (a,b) => a+b; // arrow function

add(4,5,6,7,8);

console.log(sum(3,4));