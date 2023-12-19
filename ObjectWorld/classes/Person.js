class Person {
    constructor(_firstName, _lastName){
        this.firstName = _firstName;
        this._lastName = _lastName;
    }

    get fullName(){
        return `${this.firstName + this.lastName}`
    }
}


export default Person;