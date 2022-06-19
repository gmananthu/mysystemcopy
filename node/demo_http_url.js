const http=require('http');
const { listenerCount } = require('process');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(7000);