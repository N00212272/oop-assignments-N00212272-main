import Electric from "./Electric.js";

class Ebike extends Electric {
    constructor(_type,_price,_year,_colour,_review,_accessories = []){
   super(_type,_price,_year,_colour,_review,_accessories = []);
    }
    

}

export default Ebike;