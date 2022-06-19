 const mongoClient=require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/";

    mongoClient.connect(url,(err,data)=>{
        if(err) throw err;
        var dbase=data.db('abhijith');

        var abhijith={
            name:"abhijith",
            age:11,
            class:7,
        }
        dbase.createCollection('abhi',(err,res)=>{
            if(err) throw err;
            console.log('collection created');

            dbase.collection('abhi').insertOne(abhijith,(err,res)=>
        {
            if(err) throw err;
            console.log('data added');
            data.close();
        })
        })
     })
    
