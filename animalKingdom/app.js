import Animal from "./classes/Animals.js";
import Cat from "./classes/Cat.js";
import Dog from "./classes/Dog.js";
import Lion from "./classes/Lion.js";
import Wolf from "./classes/Wolf.js";
import Zoo from "./classes/Zoo.js";


let Cat1 = new Cat("jerry", 3);
let Dog1 = new Dog("tom", 2);
let Lion1 = new Lion("simba", 6);
let Wolf1 = new Wolf("DownBad", 9);

let zoo1 = new Zoo('kacZoo','123 fake street');
let zoo2 = new Zoo('Animal Kingdom','321 real street');


zoo1.addNewAnimal(Cat1);
zoo1.addNewAnimal(Dog1);
zoo1.addNewAnimal(Lion1);
zoo1.addNewAnimal(Wolf1);

zoo2.addNewAnimal(Lion1);
zoo2.addNewAnimal(Wolf1);

console.log(zoo1.getAnimalList());

let animalList = zoo1.getAnimalList();


// animals.push(Lion1);
// animals.push(Wolf1);

// console.log(animals);

animalList.forEach((animal)=>{
animal.makeNoise();
animal.roam();
animal.sleep();
console.log("--------------------------------")

});



console.log("Second zoo")
console.log(zoo1.search("jerry"));



console.log(`Is Cat1 a Cat: ${Cat1 instanceof Cat}`);
console.log(`Is Cat1 a Animal: ${Cat1 instanceof Animal}`);

