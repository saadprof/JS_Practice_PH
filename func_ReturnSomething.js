import creepyUrbanLegendsArray from './genFile/genArray.js';
import creepyUrbanLegendsObj from './genFile/genObj.js';

function returnSomething(paramName){
    return paramName;
}


const returnedUrbanArray = returnSomething(creepyUrbanLegendsArray);
console.log(returnedUrbanArray);

const returnedUrbanObj = returnSomething(creepyUrbanLegendsObj);
console.log(returnedUrbanObj);