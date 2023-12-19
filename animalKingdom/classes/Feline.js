import Animal from "./Animals.js";

class Feline extends Animal {
    constructor(_name, _age){
   super(_name, _age);
    }
    roam(){
        console.log("im roaming alone")
    }

}

export default Feline;