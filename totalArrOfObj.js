import { productSpec } from './genFile/genProductArrObj.js';
/*
    At first, we have to import the product array.
    Then we will create a randomiser function that pick 1-8 number as product quantity.
    The randomiser function will also pick random products from array previous randomised times.
*/ 

// Randomiser and product picking function.
function pickRandomProducts(productArr){
    
    // At first store random product quality number to run a loop.
    const randomProductQuantity = Math.trunc(Math.random() * 8 + 1);

    const randomProductPrice = [];

    for(let i = 0; i <= randomProductQuantity; i++){
        // Here this random number will pick products from array as index. For now, we'll just take the product price.
        const randomProduct = Math.trunc(Math.random() * 20);
        randomProductPrice.push(productArr[randomProduct].price_bdt);
    }

    // Return array of product price.
    return randomProductPrice;
}

function totalOfPurchasedProducts(productSpec){
    // Array of product price from randomiser function
    const productPriceArr =  pickRandomProducts(productSpec);
    
    // Now sum it all up and return the total cost of purchase.
    let total = 0;
    for(let productPrice of productPriceArr){
        total += productPrice;
    }
    
    const totalPrice = `Total purchased: ${total}tk`;
    return totalPrice;
    // console.log(productPriceArr, total);
}

const totalResult = totalOfPurchasedProducts(productSpec);
console.log(totalResult);