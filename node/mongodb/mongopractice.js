
 const mongoClient=require('mongodb').MongoClient;
    const url="mongodb://localhost:27017/";

    mongoClient.connect(url,(err,data)=>
{  if(err) throw err,
    console.log('connected');
var dbname=data.db('arjun');

dbname.createCollection('arjuncollection',(err,res)=>{
    if(err) throw err;
    console.log('collection created');
    var arjunpack=[
        {
        name:"ajith1",
        age :23
    },
    {
        name:"ajith2",
        age:22
    }
    ]
    dbname.collection('arjuncollection').insertMany(arjunpack,(err,res)=>{
        if(err) throw err;
        console.log('data added')
    })
})
})