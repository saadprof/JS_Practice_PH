console.log(`Measurement types: 
                Meter to Centimeter --> mToCm
                Centimeter to Meter --> cmToM
                Inch to Foot --> iToFt
                Foot to Inch --> ftToI
`)

function measurementConverter(type, input){
    
    let result = 0;

    if(type === "mToCm"){
        result = input * 100
        return `${result} cm`;
    } else if(type === "cmToM"){
        result = input / 100;
        return `${result} meter`;
    } else if(type === "iToFt"){
        result = input / 12;
        return `${result} foot`;
    } else if(type === "ftToI"){
        result = input * 12;
        return `${result} inch`;
    } else{
        return `Not an valid input`;
    }
}


const measurementResult = measurementConverter("ftToI", 12);
console.log(measurementResult);