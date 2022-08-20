const ftoc = function(temperature) {
  // Create a variable for the final temperature
  let convertedTemperature = 0;

  // Convert the tempereature from fahrenheit to celsius
  convertedTemperature += ((temperature - 32) * (5/9))
  // Round the converted temperature to one decimal place
  convertedTemperature = Math.round(convertedTemperature*10)/10;

  return convertedTemperature;
};

const ctof = function(temperature) {
  // Create a variable for the final temperature
  let convertedTemperature = 0;
  // Convert the temperature from celsius to fahrenheit
  convertedTemperature += ((temperature * (9/5)) + 32)
  // Round the converted temperature to one decimal place
  convertedTemperature = Math.round(convertedTemperature*10)/10;

  //Return converted temperature
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
