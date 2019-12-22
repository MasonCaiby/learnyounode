const net = require('net');
const port = process.argv[2];

function fixFormat(string, length) {
    newLength = length-string.toString().length;
    return "0"*newLength+string;
};

const server = net.createServer(function (socket) {
                 const date = new Date();
                 const year = fixFormat(date.getFullYear(), 4);
                 const month = fixFormat(date.getMonth()+1, 2); // starts at 0
                 const day = fixFormat(date.getDate(), 2); // returns the day of month
                 const hour = fixFormat(date.getHours(), 2);
                 const minute = fixFormat(date.getMinutes(), 2);
                 socket.end(year+"-"+month+"-"+day+" "+hour+":"+minute+"\n")}
);

server.listen(port);