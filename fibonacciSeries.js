function fibonacciSeries(seqTerm){
    const fibonacciResult = [0, 1];

    for(let i = 2; i <= seqTerm; i++){
        fibonacciResult[i] = fibonacciResult[i - 1] + fibonacciResult[i - 2];
    }
    return fibonacciResult;
}

const fibonacciResult = fibonacciSeries(5);
console.log(fibonacciResult);