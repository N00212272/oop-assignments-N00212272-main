class Animal {
    constructor(_name, _age, ){
        this.name = _name;
        this.age = _age;

    }

    sleep(){
        console.log("Sleeping ZZZzzzzz...")
    }

    makeNoise(){
        console.log("noises")
    }

    roam(){
        console.log("roaming: roam")
    }
}

export default Animal;