const express=require('express')
const app=express();
const cookies=require('cookie-parser');

app.use(cookies());
let user={
    name:'ananthu',
    place:'mntr'
}
app.get('/',(req,res)=>{
    res.send('cookie sample');
})
app.get('/setuser',(req,res)=>{
    res.cookie('userData',user)
    res.send('user added');
})
app.get('/getuser',(req,res)=>{
    res.send(req.cookies)
})
app.get('/logout',(req,res)=>{
    res.clearCookie('userData');
    res.send('logout success fully')
})
app.listen(3000,()=>{
    console.log('server running');
})