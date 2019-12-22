args = process.argv;
var total = 0;
var i;

for (i=2; i < args.length; i++) {
    total += Number(args[i]);
}

console.log(total);