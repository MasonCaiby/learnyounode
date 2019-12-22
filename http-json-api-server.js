const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
        url1 = new URL(req.url, 'http://example.com');
        var iso = url1.searchParams.get("iso");

        if (url1.pathname.slice(5) === "parsetime") {
            const newdate = new Date(iso);
            var result = JSON.stringify({"hour" : newdate.getHours(),
                                           "minute": newdate.getMinutes(),
                                           "second": newdate.getSeconds()});


        } else {
            const newdate = new Date(iso);
            var result = JSON.stringify({"unixtime": newdate.getTime()});
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(result);
        res.end();


     })


server.listen(port);