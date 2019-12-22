const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

var string1 = "";
var string2 = "";
var string3 = "";

var count = 0;

function collectData() {

    http.get(url1, function (response) {
        response.on('data', function(data) {
            string1 += data.toString();
        });

        response.on('end', function () {
            count++;
            if (count === 3) {
                printData()
            }
        });

    });

    http.get(url2, function (response) {
        response.on('data', function(data) {
            string2 += data.toString();
        });

        response.on('end', function () {
            count++;
            if (count === 3) {
                printData()
            }
        });

    });

    http.get(url3, function (response) {
        response.on('data', function(data) {
            string3 += data.toString();
        });

        response.on('end', function () {
            count++;
            if (count === 3) {
                printData()
            }
        });
    });

}

function printData() {
    console.log(string1);
    console.log(string2);
    console.log(string3);
};

collectData();