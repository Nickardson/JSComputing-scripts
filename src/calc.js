if (args[0] == "/?") {
    print("A simple calculator.");
    print("usage: calc [2 * 2]");
    throw 0;
}

// Put functions such as "cos" or "floor" into the global namespace.
Object.getOwnPropertyNames(Math).forEach(function (prop) {
    this[prop] = Math[prop];
}, this);

var expression = args.join(" ");
expression = expression.replace("[", "(").replace("]", ")");

try {
    print(eval(expression));
} catch (e) {
    print("Invalid expression.");
}
