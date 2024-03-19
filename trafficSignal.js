let signal = "green";

// Traffic signal with if-else if-else
if(signal.toLowerCase() === "red"){
    console.log("Stop!!!");
} else if(signal.toLowerCase() === "yellow"){
    console.log("Wait some moments.");
} else if(signal.toLowerCase() === "green"){
    console.log("You can go now.");
} else{
    console.log("Signal error.")
}


// switch condition.
switch(signal.toLowerCase()){
    case "red":
        console.log("Stop!!!");
        break;
    case "yellow":
        console.log("Wait a moment please.");
        break;
    case "green":
        console.log("You can drive now.");
        break;
    default:
        console.log("X Signal Error X");
        break;
}