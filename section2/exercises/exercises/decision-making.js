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

Answer: The conditional of the if/else statment will run bearClothing = "hat" if doorChoice is strictly equal to 1,
otherwise it will run bearClothing = "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

Answer: bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Answer: "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Answer:
When the conditional bearChoice is strictly equal to 1, the console will log the concatenated string from line 28.
When the conditional bearChoice is strictly equal to 2, the console will log the concatenated string from line 30.
When the conditional bearChoice is strictly equal to 3, the console will log the sting from line 32.
When the conditional is not strictly equal to 1, 2, or 3, the console will log the string from line 34.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Answer: The console would log "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

Answer: The console will log..
"You see the bear putting on a hat"
"It looks like that hat is too small for the bear, do you..."
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

Answer: When bear choice equals somthing other that 1, 2, or 3 and the console Logs
"You stay with the bear and become it's best freind!"
*/
