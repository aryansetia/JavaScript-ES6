// here ... is being used as rest parameter, it basically collects several elements. In function when we require to pass several arguements but were not sure how many
// we have to pass
function add(a, ...nums) { 
    
    console.log(a, nums);
}

add(4,5,6,7,8)