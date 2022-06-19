var http=require('http')
var dt=require('./timemodule')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(dt.myDateTime());
    res.end();
}).listen(7000);






// const { text } = require('express');
// const http= require('http');
// const url=require('url');


// http.createServer((req,res)=>{
//     if(req.url=="/"){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('hai hello')
//     res.end()}
//     else{
//         res.writeHead(400);
//         res.end()
//     }}).listen(3000,()=>{
//         console.log('server connected')

//     })