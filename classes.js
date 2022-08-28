class Animal { 
    constructor(type, legs){
        this.type = type;
        this.legs = legs 
    }
   
    makeNoise(sound = 'Loud Noise') { 
        console.log(sound);
    }

    static return10() {
        console.log(10);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    
}

class Cat extends Animal {

    makeNoise(sound = 'Meow') {
        console.log(sound);
    }
}

// cat.legs = 4;
// console.log(cat.legs)

// cat.makeNoise();

// Animal.return10() //calling static function without creating an object

// console.log(cat.metaData)

let cat = new Cat('Cat', 4);

cat.makeNoise();