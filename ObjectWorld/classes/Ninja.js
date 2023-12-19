import Human from "./Human.js"

class Ninja extends Human {
    constructor(_name){
        super(_name);
        this.health = 100;
        this.strength = 4;
        this.stealth = 3;
        this.intelligence = 7;
    }
    steal(_human){    
        if (_human instanceof Human){
            _human.health -= this.stealth;
            this.health += this.stealth;
         }
    }
    runAway(){
        this.health -=10;
    }
}

export default Ninja;