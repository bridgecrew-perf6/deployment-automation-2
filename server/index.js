const http = require("http");
const { randomBytes } = require('crypto');
const PORT = 5050;

var data = {
    'id123': {
        username: "Shafin",
        address: "dhaka"
    }
};
const server = http.createServer(async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
    } else if (req.url === "/" && req.method === "POST") {
        const id = randomBytes(4).toString('hex');
        const payload = [];
        res.writeHead(200, { "Content-Type": "application/json" });
        req.on('data', function (chunk) {
            payload.push(chunk);
        }).on('end', function () {
            const _data = Buffer.concat(payload).toString();
            data[id] = JSON.parse(_data);
        });
        res.write(JSON.stringify('User entry done'));
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});