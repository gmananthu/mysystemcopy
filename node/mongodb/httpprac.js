var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write('hai everyone')
    res.end();

}).listen(8001,()=>{
    console.log('server running')})
