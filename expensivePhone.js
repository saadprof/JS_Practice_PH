import { phoneSpec } from './genFile/genPhoneArrObj.js';

function expensivePhone(phoneArr){
    let expensive = phoneArr[0].phone_price_bdt;

    for(let i = 0; i < phoneArr.length; i++){
        if(phoneArr[i].phone_price_bdt > expensive){
            expensive = phoneArr[i].phone_price_bdt;
        }
    }

    const expensivePhonePrice = `The most expensive phone will cost you ${expensive}tk`;
    return expensivePhonePrice;
}

const expensivePhonePrice = expensivePhone(phoneSpec);
console.log(expensivePhonePrice);