
var http=require('http');
var url=require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/http'})
    var q=url.parse(req.url,true);
    var qname=q.query;
    console.log(qname.month);
    res.end();
}).listen(7000);