class Human {

    //private properties using hashtag
    #health;
    #strength;
    #stealth;
    #intelligence;


    constructor(_name){
        this.name = _name;
        this.#health = 100;
        this.#strength = 3;
        this.#stealth = 3;
        this.#intelligence = 3;
    }
    //getters and setters health
    get health(){
        return this.#health;
    }
    set health(_health){
        if(_health >= 0 && _health <=100){
            this.#health = _health;
        }
        else{
            console.error("Only numbers above or equal to 0 allowed");
        }
    }
     //getters and setters strength
     get strength(){
        return this.#strength;
    }
    set strength(_strength){
        if(_strength >= 0 && _strength <=100){
            this.#strength = _strength;
        }
        else{
            console.error("Only numbers above or equal to 0 allowed");
        }
    }
     //getters and setters stealth
     get stealth(){
        return this.#stealth;
    }
    set stealth(_stealth){
        if(_stealth >= 0 && _stealth <=100){
            this.#stealth = _stealth;
        }
        else{
            console.error("Only numbers above or equal to 0 allowed");
        }
    }
     //getters and setters intelligence
     get intelligence(){
        return this.#intelligence;
    }
    set intelligence(_intelligence){
        if(_intelligence >= 0 && _intelligence <=100){
            this.#intelligence = _intelligence;
        }
        else{
            console.error("Only numbers above or equal to 0 allowed");
        }
    }

    attack(_human){
        if (_human instanceof Human){
            console.log(`${this.name} is attacking ${_human.name}`)
           _human.health = _human.health - this.strength;
        }
    }
    getStats(){
        return `
        Health: ${this.health},
        Strength: ${this.strength},
        Stealth: ${this.stealth},
        Intelligence: ${this.intelligence},
        `;
    }
}

export default Human;