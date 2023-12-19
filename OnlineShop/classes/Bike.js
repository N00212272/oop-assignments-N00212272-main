class Bike {
    constructor(_name,_price,_year,_colour,_review,_accessories = 'none'){
        this.name = _name;
        this.price = _price;
        this.year = _year;
        this.colour = _colour;
        this.review = _review;
        this.accessories = _accessories;

    }
    getDetails(){
        return `
        type: ${this.name}
        price: ${this.price}
        year: ${this.year}
        colour: ${this.colour}
        review: ${this.review}
        accessories: ${this.accessories}
        `;
    }
}

export default Bike;