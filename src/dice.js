// Help message.
if (args[0] == "/?") {
    print("Rolls a die, defaults to 6 sides.");
    print("usage: dice [optional sides] [optional times]");
    throw 0;
}

var sides = 6,
    times = 1;

// Optional sides parameter
if (!isNaN(args[0])) {
    sides = args[0];
}

// Optional times parameter
if (!isNaN(args[1])) {
    times = Math.min(args[1], 100);
}

// An array which stores the results.
var results = [];

for (var i = 0; i < times; i++) {
    // Get the result of the roll.
    var roll = Math.floor(Math.random() * sides) + 1;

    // Add the roll to the list of results.
    results.push(roll);
}

// Glue the results together with a comma.
print("Rolled: " + results.join(", "));