/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/

// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = 'Harry Potter';
console.log(name);

// EXAMPLE: Write code below to add 22 to the variable `students` and
// log the result:
var enrolledStudents = 22;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var dobbyLine = 'Harry Potter must not return to Hogwarts!';
console.log(dobbyLine);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
// Store the appropriate data types in each.
// log all three variables to the console.
var firstName = 'jon';
var isHungry = false;
var numberOfPets = 1;

console.log(firstName, isHungry, numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
// Explain.
// 1. For the "firstName" variable, as the value would be my name a String is most appropriate.
// 2. For the "isHungry" variable, a boolean "true" or "false" made the most sense due to how
// the variable was named. However, one could argue that hunger is on a spectrum.
// 3. For the "numberOfPets" variable, the only logical value would be an Integer, but I could
// see a String being used in specific scenarios.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
// values (but same data type).
// log all three variables to the console.
firstName = 'jane';
isHungry = true;
numberOfPets = 3;

console.log(firstName, isHungry, numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
var totalSnacks = healthySnacks + junkFoodSnacks;

console.log(totalSnacks);
// OR
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? If you had issues with doing so, ask in your pre-work channel for
// help ASAP.
