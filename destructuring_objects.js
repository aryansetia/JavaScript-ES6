const personalInformation = {
    firstName: "Aryan",
    lastName: "Setia", 
    city: "Faridabad", 
    state: "Haryana", 
    country: "India"
}

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`)