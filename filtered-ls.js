const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const extension = process.argv[3];

fs.readdir(dir, function filterDir(err, contents) {
    for(let i=0; i<contents.length; i++) {
        if (path.extname(contents[i]) === "."+extension) {
            console.log(contents[i]);
        }
    }
})