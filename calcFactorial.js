function factorial(num){
    let result = 1;

    // for(let i = 1; i <= num; i++){
    //     result *= i;
    // }

    if(num < 0) return "Negative digit";
    if(num > 0){
        for(let i = num; i >= 1; i--){
            result *= i;
        }
    }

    return result;
}

const factorialResult = factorial(0);
console.log(factorialResult);