var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  //dbo holds the address of the database pes
  var dbo = db.db("pes");
  //name of the database,callback
  //Db.createCollection(name: string, callback: MongoCallback<Collection<TSchema>>
  dbo.createCollection("employee", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//Now we see 'pes' database in our mongo compass