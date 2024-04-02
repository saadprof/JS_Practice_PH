import { phoneSpec } from './genFile/genPhoneArrObj.js'

function searchWithString(string){
    
    for(let phone of phoneSpec){
        if(phone.phone_name.toLowerCase() === string.toLowerCase()){
            return phone;
        }
    }
}

const searchResult = searchWithString("Samsung");
console.log(searchResult);