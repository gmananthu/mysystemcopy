// const http=require('http');

// http.createServer((req,res)=>{
//     if(req.url==='/'){
//     res.write('connected');
//     res.end()}
//     else if(req.url==='/admin'){
//         res.write('admin page');
//         res.end();
//     }
// }).listen(7000,()=>{
//     console.log('connected')
// })

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hai')
})
app.listen(7000,()=>{
    console.log('7000port')
})