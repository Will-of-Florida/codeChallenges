// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. 
// It is possible for temperature sensors to report temperatures with a higher accuracy such as to the 
// nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature 
// measuring sensors.

// Code That Needs Debugging:
// function weatherInfo (temp) { //changed temp to temperature
//     var c : convert(temp) //incorrect way to declare variable. Changed to var c = (temperature - 32) * (5/9)
//     if (c > 0) //should be if c < 0
//       return (c + " is freezing temperature")
//     else
//       return (c + " is above freezing temperature")
//   }
  
//   This function is not needed: 
//   function convertToCelsius (temperature) {  //Not Needed
//     var celsius = (tempertur) - 32 + (5/9) //temperature is spelled wrong. Math equation is wrong. Moved the equation to weaetherInfo function and made var c the conversion. 
//     return temperature //Not needed
//   }

function weatherInfo (temperature) {
    var c = (temperature - 32) * (5/9)
    if (c < 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }