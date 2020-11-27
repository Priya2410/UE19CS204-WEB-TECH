var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pes");//To have access to the database
  //Here we create an object which we add to employee collection
  var myobj = { empid: "st18cse909", address: "electronic city" };
  dbo.collection("employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();//mandatory
  });
});
//when you open mongo compass we see the myobj is added to employees collection