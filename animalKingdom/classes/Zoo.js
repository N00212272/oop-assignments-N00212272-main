import Animal from "./classes/Animals.js";

class Zoo {
    constructor(_name, _address){
        this.name = _name;
        this.address = _address;
        this.animals = [];

        // let lion = new lion('johnny',3);
        // this.animals = [lion];
    }

    //get all animals in array
    getAnimalList(){
        return this.animals;
    }

    //add new animal to array
    addNewAnimal(_animal){
        this.animals.push(_animal);
        if (_animal instanceof Animal){
            this.animals.push(_animal);
        }
        else {
            console.error(`${_animal} this is not an Animal`)
        }
    }

    //search for a specific animal buy name
    search(_term){
       let result = this.animals.filter((animal) => animal.name ===_term);
       
       return result;
    }
}
export default Zoo;