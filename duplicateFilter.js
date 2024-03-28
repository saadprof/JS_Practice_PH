// This function will iterate over array of digits/names, check them if they are unique?
// If so, it will return a array of unique digits/names.

const digits = [ 12, 15, 17, 21, 19, 21, 15, 15, 32, 33, 49, 29, 17, 21 ];
const names = [ "Jubayer", "Hasnat", "Jamil", "Arafat", "Shakil", "Arafat",
                "Rafi", "Faysal", "Faysal", "Shakil", "Jubayer", "Shorif" ];

function filterDuplicate(arrName){

    const uniques = [];
    for(let arrItem of arrName){
        if(!uniques.includes(arrItem)){
            uniques.push(arrItem)
        }
    }
    return uniques;
}

const filterResult = filterDuplicate(names);
console.log(filterResult);