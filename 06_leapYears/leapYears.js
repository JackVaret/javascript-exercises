const leapYears = function(year) {
    // Check to see if a year is divisible by 100
    if(year %100==0)
    {
        // Check to see if a year divisible by 100 is divisible by 400
        if(year %400==0)
        {
            // If true, return true
            return true;
        }
        else
        {
            return false;
        }
    }
    // Check to see if the year is not divisible by 100
    else if(year%100 !=0)
    {
        // Check to see if the year is divisble by 4
        if(year%4==0)
        {
            // Return true
            return true;
        }
        else
        {
            //Return false
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
