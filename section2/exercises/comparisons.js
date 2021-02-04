/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachersequal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents great than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
/* This is a comparison operator. We are comparing the two values, 4 and 9, with each other
and stating that the value of 4 is less than the value of 9. The console should print out "true". */

var books = 3;
console.log(4 < books);
/* This is another comparison operator. We are comparing the value 4 to the variable books,
which could have changing integer values. In this case, the var books is assigned to 3.
So the operator is asking if the value of 4 is less than the value of 3. This should
log "false". */

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
/* In this example, we have two variables, friends and siblings. Friends is assigned
the value of 6 and siblings is assigned the value of 2. The comparison operator is stating
that friends is greater than siblings, or 6 is greater than 2, which should log "true". */

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
/*We have two variables in this example, attendees and meals. Attendees has a value of 9
and meals has a value of 8. The operator is stating that the attendees cannot be the
same as meals, or in this case, 9 cannot equal to 8. This should log "true". */


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);


// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);


// Determine if the dog loves to play and is a puppy
var isAPuppy = true; // Could also use var isAPuppy = (age >= 1);
console.log(lovesToPlay && isAPuppy);
// Could also use variable isAPuppy with a value of (age >= 1) stating that
// any dog 1 year or younger is a puppy.


// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: In this case, we needed another variable. We knew the age of the dog was 1 from
// the variable age = 1. So we could have a few options here. At first I tried creating a new
// variable isAPuppy = (age >= 1) which would have any dog with the age of 1 or less to
// be a puppy. An easier variable would be to have the isAPuppy = true. In both cases,
// they log 'true'.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
