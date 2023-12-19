class Products {
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