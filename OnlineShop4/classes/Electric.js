import Products from "./Products.js";

class Electric extends Products {
    constructor(_type,_price,_year,_colour,_review,_accessories = []){
        super(_type,_price,_year,_colour,_review,_accessories = []);
         }
         honk(){
            console.log("Beep Beep I have an electric vehicle")
        }

}

export default Electric;