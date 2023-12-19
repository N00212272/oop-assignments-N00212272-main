class Products {

    //private properties using hashtag
    #price;
    #year;
    #accessories;

        constructor(_name,_price,_year,_colour,_review,_accessories = 'none'){
            this.name = _name;
            this.#price = _price;
            this.#year = _year;
            this.colour = _colour;
            this.review = _review;
            this.#accessories = _accessories;
    }
    //getters and setters
    get price(){
        return this.#price;
    }
    set price(_price){
       if(_price >= 1500 && _price <=2000){
           this.#price = _price;
       }
       else{
           console.error("cannot change price of item")
       }
    }
    get year(){
        return this.#year;
    }
    set year(_year){
       if(_year >= 2000 && _year <=2022){
           this.#year = _year;
       }
       else{
           console.error("cannot change the year made")
       }
    }
    get (){
        return this.#accessories;
    }
    set accessories(_accessories){
       if(_accessories = this.#accessories ){
           this.#accessories = _accessories;
       }
       else{
           console.error("cannot change accessories")
       }
    }
        getDetails(){
            return `
            name: ${this.name}
            price: ${this.price}
            Year: ${this.year}
            Colour: ${this.colour}
            review: ${this.review}
            accessories: ${this.accessories}
            `;
        }
        
    
    honk(){
        console.log("I dont have any honk")
    }
}

export default Products;