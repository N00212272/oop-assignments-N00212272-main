class Account{
    constructor(_password,_firstName,_lastName){
    this.password = _password;
    this.firstName = _firstName;
    this.lastName = _lastName;
    }

    get fullName(){
        return `${this.firstName + this.lastName}`
    }

}
export default Account;