import Human from "./classes/Human.js";
import Ninja from "./classes/Ninja.js";
import Wizard from "./classes/Wizard.js";

let Kacper = new Human("KadexEU");

let Sean = new Human("sean");

let wiz = new Wizard("johnny");

let ja = new Ninja("gretest fortnite player");

let characters = [Kacper,Sean,wiz,ja];

characters.forEach((character) => {
    console.log(character.getStats());
});
Kacper.attack(Sean);
wiz.fireball(Sean);
ja.steal(Sean);


console.log(`Seans health: ${Sean.getStats()}`);


// import Person from './classes/Person.js';

// let p = new Person("kacper", "agatowski");


 console.log(Kacper.getStats());