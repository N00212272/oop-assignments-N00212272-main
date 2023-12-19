import Product from "./Products.js";

class Shop{
    constructor(_name,_address){
        this.name = _name;
        this.address = _address;
        this.Products = [];
}
//get all products in array
getProductList(){
    return this.Products;
}
 //add new Product to array
 addNewProduct(_Product){
    if (_Product instanceof Product){
        this.Products.push(_Product);
    }
    else {
        console.error(`${_Product} is not a Product`)
    }
}
 //search for a specific animal buy name
 search(_term){
    let result = this.Products.filter((Product) => Product.name ===_term);
    
    return result;
 }
}

export default Shop
