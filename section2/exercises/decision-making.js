/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
//Depending on which door you gor through, the bear ends up putting on different clothing.
// This is the beginning of an if, else tree.

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing its value is assigned to  a string  -> 'hat'

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// bearClothing's value would be assigned to the string  -> 'scarf', because the else
// statement would execute.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// An if, else if, else tree is executing. Depending on what value you assign to bearChoice
// the console will show a different string message. If you structured this differently you could also use a switch.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The message "You run as fast as you can into the next room. It's full of snakes!" will print to
// the console and that will result into you crying for dear help and potentially soiling your britches.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The message "You offer the bear your hat and the bear shows you a secret passage out!"" will print to
// the console. Which will leave your lovely locks exposed, but at least you will be out of harms way.

7. What is your favorite ending?
My favorite ending is the else statement ending. Clearly I want to befriend a bear. However, depending on what type of bear
it is this may not be possible. Hopefully, it is a kind bear like Winnie the Pooh.
*/
