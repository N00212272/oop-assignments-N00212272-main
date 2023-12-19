import Hybrid from "./classes/Hybrid.js";
import Mountain from "./classes/Mountain.js";
import Road from "./classes/Road.js";
import Ebike from "./classes/Ebike.js";
import Bmx from "./classes/Bmx.js";
import Escooter from "./classes/Escooter.js";
import Folding from "./classes/Folding.js";
import Gocart from "./classes/Gocart.js";
import Scooter from "./classes/Scooter.js";
import Skateboard from "./classes/Skateboard.js";
import Electric from "./classes/Electric.js";
import Shop from "./classes/Shop.js";
import Bikes from "./classes/Bikes.js";



  let Road1 = new Road ('road', '$1000', '2021', 'white','very fast', ['helmet','lights' ]);
  let Mountain1 = new Mountain ('mountain', '$850', '2020', 'nice suspension',['helmet', 'spare tyre']);
  let Hybrid1 = new Hybrid ('hybrid', '$1500', '2022', 'white','best bike i have cycled', ['helmet', 'lights', 'spare tyre']);
  let Ebike1 = new Ebike ('electric bike', '$1300', '2019','brown', 'Lazy bike', ['helmet']);
  let Bmx1 = new Bmx ('trick Bmx', '$350', '2015', 'snow white', 'beginner tricks bike', ['steel bars', 'spike helmet']);
  let Escooter1 = new Escooter ('10th gen Electric scooter', '$1100','2022','standard black', 'easy to use and perfect for public transport', ['charger']);
  let folding1 = new Folding ('apex folding bike', '$700', '2018', 'grey goose', 'such a handy bike',[]);
  let Gocart1 = new Gocart ('U12s Gocart', '$180','2015', 'racer red', 'perfect for a chrimbo present', ['stickers']);
  let Scooter1 = new Scooter ('trix scooter', '$250','2020', 'black & red', 'perfect for tricks on indoor and outdoor surfaces',['knee and elbow pads', 'helmet', 'stickers']);
  let Skateboard1 = new Skateboard ('tony skateboard', '$150', '2017', 'custom', 'Very durable for Skateboarders', ['helmet', 'spare wheels']);

//added previous items to products class
//  let products = [Road1, Mountain1, Hybrid1, Ebike1, Bmx1,Escooter1,folding1];
//  products.push(Gocart1);
//  products.push(Scooter1);
//  products.push(Skateboard1);

// console.log(products);

// products.forEach((product)=>{    
//     console.log(product.getDetails());
//     product.honk();
//     console.log('------------------------------------------------');
// })

let shop1 = new Shop('cool shop', '123 cool street');
//added all products to shop1
shop1.addNewProduct(Road1);
shop1.addNewProduct(Mountain1);
shop1.addNewProduct(Hybrid1);
shop1.addNewProduct(Ebike1);
shop1.addNewProduct(Bmx1);
shop1.addNewProduct(Escooter1);
shop1.addNewProduct(Gocart1);
shop1.addNewProduct(Scooter1);
shop1.addNewProduct(Skateboard1);


console.log(shop1);
console.log(shop1.getProductList());
// let productList = shop1.getProductList();

// productList.forEach((product)=>{
//   product.honk();
//   product.getDetails();
//   console.log("--------------------------------")
  
//   });

  // console.log(`Is Ebike a bike: ${Ebike instanceof Bikes}`);



