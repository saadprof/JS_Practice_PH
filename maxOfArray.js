const numbers = [ 73, 45, 51, 78, 92, 89, 33, 31, 19, 49 ];

function maxOfArray(arrName){
    let max = arrName[0];

    for(let i = 0; i < numbers.length; i++){
        if(arrName[i] > max){
            max = arrName[i];
        }
    }

    return max;

}

const maxResult = maxOfArray(numbers);
console.log(maxResult);


// It's a easy method to do the same.
const maxResult2 = Math.max(...numbers);
console.log(maxResult2);