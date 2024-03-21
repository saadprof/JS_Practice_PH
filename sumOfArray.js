const scores = [ 12, 42, 21, 14, 64, 23, 54, 18, 34 ]

function getSumOfArray(arrName){
    let total = 0;

    if(!Array.isArray(arrName)) return "Invalid input."
    if(Array.isArray(arrName)){
        for(let arrItem of arrName){
            total += arrItem;
        }
    }

    return total;
}


const sum = getSumOfArray(scores);
console.log(sum);