import Animal from "./Animals.js";

class Canine extends Animal {
    constructor(_name, _age){
   super(_name, _age);
    }
    roam(){
        console.log("Im roaming in a group")
    }

}

export default Canine;