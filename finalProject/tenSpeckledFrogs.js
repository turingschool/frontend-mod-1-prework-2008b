var frogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 10; i > 0; i--) {
  if ([i] > 2) {
    console.log([i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were ", + [i] - 1, " speckled frogs.");
} else if ([i] == 2) {
    console.log([i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.");
} else{
    console.log([i] + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
}
}