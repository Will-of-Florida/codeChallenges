// DEBUGGING

// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// **************************
// **PROVIDED CODE TO DEBUG**
// **************************

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }
    
//     return name;
//   }


function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 2:
        name = 'Venus'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 3:
        name = 'Earth'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 4:
        name = 'Mars'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 5:
        name = 'Jupiter'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 6:
        name = 'Saturn'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 7:
        name = 'Uranus'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
      case 8:
        name = 'Neptune'
        break; //Added a break. This allows the statement to stop if this case evaluates true 
    }
    
    return name;
  }

// If break is omitted, execution will proceed to the next case clause, even to the default clause, 
// regardless of whether the value of that clause matches. This behavior is called "fall-through".
// The provided code was originally returning 'Neptune' due to fall-through