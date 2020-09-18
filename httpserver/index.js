//requiring the http module
const http = require("http");
//using http.createServer method
const server = http.createServer((req,res)=>{
    console.log('server is created :)');
    res.end("Hello from the other sides");
});
//listening to the port or the address
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port number 8000");
});