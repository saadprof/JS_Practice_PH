function factorial(num){
    let result = 1;

    // for(let i = 1; i <= num; i++){
    //     result *= i;
    // }

    for(let i = num; i >= 1; i--){
        result *= i;
    }

    return result;
}

const factorialResult = factorial(5);
console.log(factorialResult);