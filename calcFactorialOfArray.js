const factorialArray = [ "Hi", 6, 5, 10, 17, 31, 23, 71, 54 ]

function factorialOfArray(arrName){
    
    let factorial = 1;
    let result = [];
    let faulties = [];

    if(!Array.isArray(arrName)) return "Invalid input";
    if(Array.isArray(arrName)){
        for(const arrItem of arrName){
            if(typeof arrItem !== "number"){
                faulties.push(arrItem);
            }

            if(typeof arrItem === "number" && arrItem > 0){
                for(let i = arrItem; i >= 1; i++){
                    factorial *= i;
                }
                result.push(factorial);
            }
        }
    }

    console.log(result, faulties);
}

factorialOfArray(factorialArray);