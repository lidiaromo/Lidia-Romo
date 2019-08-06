const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"WorkOrderNo": "PO00000090"});
    response.end("WorkOrderNo:PO00000089");
});

const port = process.env.PORT || 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
