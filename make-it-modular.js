const filterDir = require('./mymodule.js')


const dir = process.argv[2]
const extension =  process.argv[3]

function printMatch(err, list) {
    if (err) {console.log("here")}
//    if (err) {return console.error("error:", err)}

    list.forEach(function(file) {
        console.log(file);
    })
}

filterDir(dir, extension, printMatch)