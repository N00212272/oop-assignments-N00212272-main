console.log ("hello world");

import Products from "./classes/Products.js";

let Road = new Products ('road 240 swift', '$1000', '2021', 'white','very fast' ['helmet','lights' ]);
let Mountain = new Products ('mountain 666 ninja', '$850', '2020', 'nice suspension',['helmet', 'spare tyre']);
let Hybrid = new Products ('hybrid special 420', '$1500', '2022', 'best bike i have cycled', ['helmet', 'lights', 'spare tyre'])

    let onlineShop = [Road, Mountain, Hybrid];

    onlineShop.forEach((Products)=>{    
    console.log(Products.getDetails());
})


