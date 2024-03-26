const numbers = [ 73, 45, 51, 78, 92, 89, 33, 31, 19, 49 ];

function minOfArray(arrName){
    let min = arrName[0];

    for(let i = 0; i < arrName.length; i++){
        if(arrName[i] < min){
            min = arrName[i];
        }
    }

    return min;
}
const minResult = minOfArray(numbers);
console.log(minResult);