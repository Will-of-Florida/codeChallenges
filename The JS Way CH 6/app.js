// **************
// ***TASK ONE***
// **************

// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. 
// Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());
// Execution result

const Aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,

    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} as xp`;
    }
}

Aurora.health -= 20; // Aurora is harmed by an arrow
Aurora.strength += 10; // Aurora equips a strength necklace
Aurora.xp += 15; // Aurora learn a new skill

console.log(Aurora.describe())


// **************
// ***TASK TWO***
// **************
// Modeling a dog
// Complete the following program to add the dog object definition.

// // TODO: create the dog object here

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const dog = {
    name: 'Scooby',
    species: 'Great Dane',
    size: '35"',

    bark(){
        return 'Grrrr! WOOF! WOOF! Grrrr! SCOOBY DOOBY DOO';
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);



// **************
// **TASK THREE**
// **************

// Modeling a circle
// Complete the following program to add the circle object definition. 
// Its radius value is input by the user.

// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

const r  = Number(prompt("Enter the circle radius:"));

const circle ={
    circumference(){
        let circleCircumference = 2 * Math.PI * r
        return circleCircumference
    },

    area(){
        let circleArea = Math.PI * r**2
        return circleArea
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


// **************
// **TASK FOUR***
// **************

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

let account = {
    name: "Alex",
    balance: 0,

    credit(transaction){
        this.balance += transaction;
    },

    describe(){
        return `Account holder ${this.name} has a balance of ${this.balance}`
    }
}
account.credit(250)
account.credit(-80)
console.log(account.describe())