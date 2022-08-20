const reverseString = function(string) {
    // Create an empty string to store new reversed string
    let reversedString = '';
    // Write for loop from the ending of the original string up to zero
    for(let i = string.length -1; i>=0;i--)
    {
        reversedString+= string[i];
    }  
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
