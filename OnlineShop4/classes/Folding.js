import Bikes from "./Bikes.js";

class Folding extends Bikes {
    constructor(_type,_price,_year,_colour,_review,_accessories = 'none'){
   super(_type,_price,_year,_colour,_review,_accessories = 'none');
    }
    

}

export default Folding;