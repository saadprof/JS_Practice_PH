// This function will take a string as input and search phone from phone array if,
//  input string match 80% with the phone_name.

/*
    Approach:   .Import phone array.
                .Create a main function that takes a string as input.
                .Split the input string.
                .Run a for...of loop to loop over phone array and get the phone_name.
                .Split the phone_name string from array and push the results into another array.
                
                .Create a helping function, that takes input str and phone_name str,
                    run a loop on phone_name str array,
                    try to match every single alphabet with phone_name str,
                    calculate how many matched,
                    return the highest matched phone_name str and percentage.

                ###Take the returned result from helping function and
                    return the best matched phone_name str.
*/ 

// phoneSpec array imported
import { phoneSpec } from './genFile/genPhoneArrObj.js';


// Main function declared
function mainStrFunc(inputStr){
    // inputStr to lower case and splitted.
    const inputStrSplit = inputStr.toLowerCase().split('');
    
    // a empty array to store the returned phone_name into lower case and splitted results.
    const phoneNameStr = [];
    
    // for...of loop get single phone item from array.
    for(let phone of phoneSpec){
        phoneNameStr.push(phone.phone_name.toLowerCase().split(''))
    }

    // strMatcher function takes splitted inputStr and array of phoneName str and return the best matched.
    strMatcher(inputStrSplit, phoneNameStr)
}

function strMatcher(inputStrArr, phoneNameStrArr){
    console.log(inputStrArr);
    console.log(phoneNameStrArr);
}

mainStrFunc("iPhoNe");