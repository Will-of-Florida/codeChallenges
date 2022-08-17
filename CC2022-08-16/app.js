// It's pretty straightforward. Your goal is to create a function that removes 
// the first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.substring(1, str.length-1)
   };
   //The substring() method returns the part of the string 
   //between the start and end indexes, or to the end of the string.
   
   //indexStart: The index of the first character to include in the returned substring.
   
   //indexEnd (Optional): The index of the first character to exclude from the returned 
   //substring
   