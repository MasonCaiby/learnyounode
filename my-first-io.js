const fs = require('fs')

let file = process.argv[2];
let readFile = fs.readFileSync(file).toString();

console.log(readFile.split('\n').length -1);
