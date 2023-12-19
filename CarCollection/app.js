console.log ("hello world")

import Car from '/carCollection/car.js';

let bmw = new Car ('bmw', '5 series', '1995', 'white', ['electric wing mirrors','aircon' ]);
let bmw2 = new Car ('bmw', '3 series', '2002', 'black',['heated seats', 'HUD']);
let toyota = new Car ('Toyota', 'Sprinter Trueno GT-APEX', '1993', 'white&grey', ['aircon', 'traction control'])

    let myCarCollection = [bmw, bmw2, toyota];

myCarCollection.forEach((car)=>{    
    console.log(car.getDetails());
})

console.log(bmw.make);
console.log(bmw2.color);