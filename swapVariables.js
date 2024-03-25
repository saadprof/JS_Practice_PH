// There are 2 methods to swap variables as far I know.
let var1 = "Hello";
let var2 = "Bye";

// 1st method: To swap these 2 we have to create another variable.
let temp;

// console.log("Before swap: ", var1, var2);

// temp = var1;
// var1 = var2;
// var2 = temp;

// console.log("After swap: ", var1, var2);


// 2nd method: Destructuring method.
console.log("Before swap: ", var1, var2);

[ var1, var2 ] = [ var2, var1 ];

console.log("After swap: ", var1, var2);