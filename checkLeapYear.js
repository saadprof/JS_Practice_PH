function checkLeapYear(inputYear){
    if(inputYear % 4 === 0 || inputYear % 100 === 0 || inputYear % 400 === 0){
        console.log(`${inputYear} is a Leap Year.`);
    } else{
        console.log("It is not a Leap Year.");
    }
}

checkLeapYear(2021);