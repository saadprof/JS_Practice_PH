// This function takes a array containing number of sequence,
// then store the fibonacci series into another array.

const sequenceArray = [ 5, 3, 11, 9, 17, 23, 21, 15 ];

function fibonacciArray(sequenceArr){
    const fibonacciArray = [];
    
    for(let sequence of sequenceArr){

        const fibonacciSeries = [0, 1];
        if(sequence > 2){
            for(let i = 2; i <= sequence; i++){
                fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            }
        fibonacciArray.push(fibonacciSeries);
        }
    }

    return fibonacciArray;
}

const fibonacciArrayResult = fibonacciArray(sequenceArray);
console.log(fibonacciArrayResult);