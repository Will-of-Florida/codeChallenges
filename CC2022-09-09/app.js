// Complete the function/method so that it returns the url with anything after 
// the anchor (#) removed.

// Examples

// www.codewars.com#about --> www.codewars.com

// www.codewars.com?page=1 -->www.codewars.com?page=1

function removeUrlAnchor(url){
    let array = url.split('') //Turns url into an array. This will allow me to find what index contains '#'
    if(array.includes('#')){ //if the url does contain '#' perform code within braces
        let modifiedArray = array.slice(0, array.indexOf('#')) //Creates a new array with the infor we want. Starts at index 0 and ends at the index before the index that contains '#'
        return modifiedArray.join('') //converts array back into a string
    }else{
      return url //if url does not contain '#' simply return the url
    }
  }