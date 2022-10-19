// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. 
// The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
    let array = [] //create an empty array to store values that are less than or equal to our budget
    for(let i = 0; i <= prices.length; i++){ //iterates through the prices array
      if(budget >= prices[i]){
        array.push(prices[i]) //if price is less than or equal to our budget, push to array
      }
    }
    return array.sort((a, b) => a - b).join(',') //sort array in ascending order then create a string out of array separated by a ,
  }