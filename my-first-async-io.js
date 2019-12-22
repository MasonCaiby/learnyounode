const fs = require('fs');

let file = process.argv[2];
var numLines;


function countNewLines(callback) {
    fs.readFile(file, function countLines(err, fileContents) {
        numLines = fileContents.toString().split('\n').length-1;
        callback();
    })
}

function printLines(){
    console.log(numLines);
}

countNewLines(printLines);