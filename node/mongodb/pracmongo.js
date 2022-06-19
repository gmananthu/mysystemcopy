const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017"

MongoClient.connect(url,(err,data)=>{
    if(err) throw err;
    var dbase=data.db('newaannthu');

    dbase.createCollection('col3',(err,res)=>{
        if(err) throw err;
        console.log('collection created');})

        var items=[{
            name:"ajith",
            place:"mntr"
        },{
            name:"achu",
            age:23
        }
    ]

        dbase.collection('col1').insertMany(items,(err,res)=>{
            if(err) throw err;
            console.log('items added');
            data.close();

        })
    })
