var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send('hai')
});
app.get('/admin',(req,res)=>{
    res.sendFile('');
})
app.listen(7000);
