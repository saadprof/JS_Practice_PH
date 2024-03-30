import { phoneSpec } from './genFile/genPhoneArrObj.js';

function cheapestPhone(phoneArr){
    
    let cheapest = phoneArr[0].phone_price_bdt;

    for(let i = 0; i < phoneArr.length; i++){
        if(phoneArr[i].phone_price_bdt < cheapest){
            cheapest = phoneArr[i].phone_price_bdt;
        }
    }
    
    const cheapestPhonePrice = `The cheapest phone is ${cheapest}tk.`

    return cheapestPhonePrice;
}

const cheapestPhonePrice = cheapestPhone(phoneSpec);
console.log(cheapestPhonePrice);