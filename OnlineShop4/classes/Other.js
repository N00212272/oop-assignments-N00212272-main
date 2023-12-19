import Products from "./Products.js";

class Other extends Products {
    constructor(_type,_price,_year,_colour,_review,_accessories = 'none'){
        super(_type,_price,_year,_colour,_review,_accessories = 'none');
         }

}

export default Other;