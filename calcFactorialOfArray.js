const factorialArray = [ "Hi", 6, 5, 10, 17, 31, 23, undefined, 54 ]

function factorialOfArray(arrName){
    
    let result = [];
    let faulties = [];
    
    if(!Array.isArray(arrName)) return "Invalid input";
    if(Array.isArray(arrName)){
        for(const arrItem of arrName){
            if(typeof arrItem !== "number"){
                faulties.push(arrItem);
            }
            
            if(typeof arrItem === "number" && arrItem > 0){
                let factorial = 1;
                for(let i = 1; i <= arrItem; i++){
                    factorial *= i;
                }
                result.push(factorial);
            }
        }
    }

    return {result, faulties};
}

const factorialResultArr = factorialOfArray(factorialArray);
console.log(factorialResultArr);