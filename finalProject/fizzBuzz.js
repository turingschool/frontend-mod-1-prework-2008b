var startCountAt = 1;
var endCountAt = 100;

for (var i = startCountAt; i <= endCountAt; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log("FizzBuzz");
  } else if (i%3 === 0) {
    console.log("Fizz");
  } else if (i%5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
