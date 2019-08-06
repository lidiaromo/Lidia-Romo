const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Status": "O",
        "U_O_ORDRNO": "PO00000089",
        "WorkOrderNo": "PO00000089",
        "U_O_STATUS": "6",
        "U_O_PRODID": "Test_bt",
        "ProductId": "Test_bt",
        "U_O_ORDRQTY": 5.000000,
        "U_O_EXPNETQTY": 5.000000,
        "U_O_PRODCDQTY": 5.000000,
        "U_O_INSPQTY": 0.000000,
        "U_O_PASSEDQTY": 0.000000,
        "U_O_NCQTY": 0.000000,
        "U_O_REJQTY": 1.000000,
        "U_O_UOM": "",
        "U_O_STARTDATE": "2019-07-22T00:00:00",
        "U_O_ENDDATE": "2019-07-22T00:00:00",
        "U_O_SONO": 0.000000,
        "U_O_CUSTCODE": "",
        "ItemName": "BT tracked"});
    response.end("Api simulator Mobile move order");
});

const port = process.env.PORT || 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
