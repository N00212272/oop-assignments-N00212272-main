import Products from "./Products.js";

class Bikes extends Products {
    constructor(_type,_price,_year,_colour,_review,_accessories = 'none'){
        super(_type,_price,_year,_colour,_review,_accessories = 'none');
         }
         honk(){
            console.log("ring ring I only have a bell")
        }

}

export default Bikes;