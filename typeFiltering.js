const diffTypesVal = [
    31,
    "Timothy",
    110,
    "Stiffeni",
    false,
    10
]


function filterTheType(arrName){
    const typeNum = [];
    const typeStr = [];
    const typeBool = [];

    const types = {};

    for(const valType of arrName){
        if(typeof valType === "number"){
            typeNum.push(valType);
        } else if(typeof valType === "string"){
            typeStr.push(valType);
        } else if(typeof valType === "boolean"){
            typeBool.push(valType);
        } else{
            return "Undefined types";
        }
    }

    types["typeNum"] = typeNum;
    types["typeStr"] = typeStr;
    types["typeBool"] = typeBool;

    return types;
}

const filterResult = filterTheType(diffTypesVal);
console.table(filterResult);