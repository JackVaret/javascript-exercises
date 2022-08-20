const sumAll = function(num1,num2) {
    // Create a variable to hold the final sum
    let sum = 0;
    // Check whether either of the numbers passed through are not numbers
   if(typeof(num1) !='number')
    {
        return "ERROR";
    }
    if(typeof(num2) !='number')
    {
        return "ERROR";
    }
    // Check whether either of the numbers are negative numbers
    if(num1 <0 || num2<0)
    {
        //If either of the numbers are negative numbers, return error
        return "ERROR";
    }

    // Check which number is the greater number and place it within a variable
    const largest = Math.max(num1,num2);
    // Check which number is the lesser number and place it within a variable
    const smallest = Math.min(num1,num2);
    // Loop from the starting number to the final number
    for(i=smallest;i<=largest;i++)
        {
            // For each number, add them to the sum
            sum +=i;
        }
        //Return the sum
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
