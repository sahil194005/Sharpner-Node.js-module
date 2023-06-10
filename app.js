const http = require("http");
const fs = require("fs");
const {routesHandler} = require('./routes')
const server = http.createServer((req,res) => {
    routesHandler(req,res);
})
server.listen(4000, () => console.log("server listening on port 4000...."));
