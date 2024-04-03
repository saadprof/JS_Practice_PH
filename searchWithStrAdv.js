// This function will take a string as input and search phone from phone array if,
//  input string match 80% with the phone_name.

/*
    Approach:   .Import phone array.
                .Create a main function that takes a string as input.
                .Split the input string.
                .Run a for...of loop to loop over phone array and get the phone_name.
                .Split the phone_name string from array and push the results into another array.
                
                .Create a helping function, that takes input str and phone_name str,
                    run a loop on phone_name str array,
                    try to match every single alphabet with phone_name str,
                    calculate how many matched,
                    return the highest matched phone_name str and percentage.

                ###Take the returned result from helping function and
                    return the best matched phone_name str.
*/ 