// This is slightly advanced one, This function takes an array, iterate over the items, 
// separate the uniques and duplicates one, returns uniques in a array and duplicates in a object,
// Object that containing duplicates have to properties: duplicates Name, duplicate count.

const digits = [ 12, 15, 17, 21, 19, 21, 15, 15, 32, 33, 49, 29, 17, 21 ];
const names = [ "Jubayer", "Hasnat", "Jamil", "Arafat", "Shakil", "Arafat", "Rafi", "Shakil",
                "Rafi", "Faysal", "Faysal", "Shakil", "Jubayer", "Shorif", "Faysal", "Tanim" ];

function advDuplicateFilter(arrName){
    const uniques = [];
    const duplicatesArr = [];
    const arrOfDuplicateObj = [];

    for(let arrItem of arrName){
        if(!uniques.includes(arrItem)){
            uniques.push(arrItem);
        } else{
            duplicatesArr.push(arrItem);
        }
    }

    // // Now we have a array of uniques and duplicates.
    // // We have to create a array ob objects from the duplicate result.
    // // Each object will contain duplicatesName, duplicateCount properties.

    

    // let duplicateObj = { duplicatesName: '', duplicateCount: 0 }
    // for(let duplicate of duplicatesArr){
    //     if(!duplicatesArr.includes(duplicate)){
    //         duplicatesArr.push(duplicate);

    //     }
    //     duplicateObj.duplicatesName = duplicate;
    //     duplicateObj.duplicateCount++
    //     console.log(duplicateObj);
    // }

    
    return [uniques, duplicatesArr];
}

const filteredResult = advDuplicateFilter(names);
console.log(filteredResult);