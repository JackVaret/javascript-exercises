
const removeFromArray = function(array,...args) {
    // Set up an empty array to be returned later
    let removedArray = []
    // Create a for loop throughout the entire original array
    for(let i =0;i<array.length;i++)
    {
        // Check if an element within that array is an element that needs to be removed
        if(args.includes(array[i]))
        {
            // If the element at that value needs to be removed, do not copy it to removedArray
            continue;
        }
         // Otherwise, copy the elements of the old array to the new array
         removedArray.push(array[i]);
         console.log(removedArray);
    }
    
       
        
         
        
       
        
    return removedArray;
};
// Do not edit below this line
module.exports = removeFromArray;
