const fs = require('fs');
const path = require('path');


function filterDir(dir, extension, callback) {

    fs.readdir(dir, function (err, contents) {
        if (err) {return callback(err, null, null)}
        var myList = [];
        contents.forEach( function (file) {
            if (path.extname(file) === "." + extension) {
                myList.push(file);
            }

        })
        callback(null, myList);
    })
}

module.exports = filterDir;