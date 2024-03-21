const scores = [ 12, 42, 21, 14, "64", 23, 54, 18, 34 ]

function getSumOfArray(arrName){
    let total = 0;

    if(!Array.isArray(arrName)) return "Invalid input."
    if(Array.isArray(arrName)){
        for(let arrItem of arrName){
            if(typeof arrItem !== "number") {
                return (`Countered invalid values in the array.`);
            };
            if(typeof arrItem === "number"){
                total += arrItem;
            };
        }
    }

    return total;
}


const sum = getSumOfArray(scores);
console.log(sum);