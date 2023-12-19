import Bikes from "./Bikes.js";

class Bmx extends Bikes {
    constructor(_type,_price,_year,_colour,_review,_accessories = []){
   super(_type,_price,_year,_colour,_review,_accessories = []);
    }
    

}

export default Bmx;

