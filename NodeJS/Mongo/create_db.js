//Database that has been created will be active only if it has atleast one document
//The below line connects the mongodb with Node JS
var MongoClient=require('mongodb').MongoClient;
//Reading a file and typing it to the database
//The port number is the default port
//connect is a method connect(url of mongodb database,callback)
var url="mongodb://localhost:27017/pes";
// connect(uri: string, callback: MongoCallback<MongoClient>
MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    console.log("Database Created");
    db.close();
});

//Create a database
//Create a collection
//Place the documents
//When we open Mongo Compass we see our data base is not shown because there is no collecetion inside it
//So now we will place in a connection 