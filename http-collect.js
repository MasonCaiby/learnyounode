const http = require('http')

const url = process.argv[2];

var chars = 0;
var string = "";

function collectData (callback) {

    http.get(url, function (response) {
        response.on('data', function (data) {
            data = data.toString();
            chars += data.length;
            string += data;
        });

        response.on('end', function () {
            callback(chars, string);
        });
    })

}

function printData(chars, string) {
    console.log(chars);
    console.log(string);
}

collectData(printData)