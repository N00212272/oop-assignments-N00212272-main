import Other from "./Other.js";

class Gocart extends Other {
    constructor(_type,_price,_year,_colour,_review,_accessories = 'none'){
   super(_type,_price,_year,_colour,_review,_accessories = 'none');
    }
    

}

export default Gocart;