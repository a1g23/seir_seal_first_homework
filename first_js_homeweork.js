// Section 1
// 1. DRY code stands for Don't Repeat Yourself. We need to pay attention to it because it makes our code easier 
// to read and less prone to bugs. An example of DRY code is functions which house blocks of code.

// 2. const, let, and var are all variables in JS. const is a variable that does not change, let is a variable that will change
// and is referenced within a block of code.. it can't be referenced outside of that block of code, 
// var is a variable that will change that can be referenced throughout the entirity of a function.


// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b)
console.log(c > d)
console.log("Alex" === "Alex")
console.log(a < b < c)
console.log(a === a !== d)
console.log(e === "Kelvin")
console.log(48 == "48")
console.log(f !== e)

let g = 0
console.log(g)

g = b + c
console.log(g)

// 1. I used `let` for the variable g because the subsequent steps were changing that value. 
// I tested `var` and `const` as well. As expected, `var` worked and `const` threw an error

// I tried not using any variable definition (just g = 0) and there was no error. ****NOT SURE IF THIS IS RIGHT**** 

// 10 = g threw an error "Invalid left-hand side in assignment"

console.log(a !== (b || f) !== !f && e !== c)

// Section 3
// 1. Yes, this is an infinite loop. The statement of TRUE will always be true so the console.log will
// run forever.

// 2. Yes, this is an infinite loop. While you want to believe that the loop will simply run once because it is updated to 
// False in the code block, the variable defined as runProgram is a const so it will not change from TRUE. TRUE will continue 
// to be TRUE forever.

let letters = "A";
let i = 0;

//start the loop for as long as i is less than 20
while (i < 20) {
    // this is concatenating the "A" with "A" to create AA every loop
	letters += "A";
    //this is adding 1 to i after every loop
	i++;
//this is closing the while loop until its run through to 20    
}
// this will print the variable letters after the entire loop runs, giving "AAAAAAAAAAAAAAAAAAAA" (20 times)
console.log(letters);

// I was correct but realized that i started with 0 so it runs 21 times instead of 20 times

// Section 4
// A for loop is similar to a while loop with some differences. a for loop is defined with the number of loops
// it will run directly in the loop. a while loop will need to run before it finds out if it will ever stop. While loops
// can be dangerous for infinite loops.

// The first part of the control panel is: the variable, usually i to stand for iterative
// The second part of the control panel is: the conditional statement
// The third part of the control panel is: the increment you want to chage the variable by after each loop

// for loop 2

for (let i = 0; i < 1000; i++) {
    console.log(i)
}

// Bonus challenge: looks like the forward slash is indicating that we want to use the apostrophe in our string text

for (let i = 999; i > 0; i--) {
    console.log(i)
}

for (let i = 1; i < 11; i++) {
    console.log("The value of i is: " + i + " of 10")
}

// Bonus Challenge
for (let i = 1; i < 11; i++) {
    console.log(`The value of i is: ${i} of 10`)
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i])
}


for (let i = 0; i < StarWars.length; i++) {
    console.log(`${StarWars[i]} ${i}`)
}

// Bonus Challenge
for (let i = 0; i < StarWars.length; i+=2) {
    console.log(StarWars[i])
}

// Section 5

