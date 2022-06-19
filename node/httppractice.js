// // const express=require('express')
// // const app = express();

// // app.get('/',(req,res)=>{
// //     res.send('hai');
// // })
// // app.listen(3000)

// const mongoClient=require('mongodb').MongoClient;
// const url="mongodb://localhost:27017"

// mongoClient.connect(url,(req,data)=>{
//     const dbname=data.db('new db');
//     dbname.createCollection('newcollection',(err,res)=>{

//     })
// })

// const express= require('express')
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('hai')
// })
// app.get('/admin',(req,res)=>{
//     res.send('admin')
// })
// app.listen(3000,()=>{
//     console.log('server connected ')
// })











// const mongoClient= require('mongodb').MongoClient;
// const url='mongodb://localhost:27017';

// mongoClient.connect(url,(req,data)=>{
//     const dbname=data.db('newdata');
//     dbname.createCollection('col',(err,res)=>{
//         if(err){
//             console.log(err);

//         }
//         else{
//             console.log('collection created')
//         }
//     })
//     dbname.collection('col').insertOne({name:"ananthu",place:'mvp'},(err,res)=>{
//         if(err) throw err;
//         else{
//             console.log('done')
//         }

//     }
//     })
// })




const mongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017"

mongoClient.connect(url,(req,data)=>{
    const dbname= data.db("database")
    dbname.createCollection('col',(err,res)=>{
        if(err) throw err;
        else{
            console.log('collection added ')
            const item={
                name :"Ananthu",
                age:23
            
            }
            dbname.insertOne(item,(err,res))
        }
    })
})