// http module ccreating a web server
var url = require('url');
var http = require('http'); //http module
var fs = require('fs'); //file system module
var MongoClient = require('mongodb').MongoClient;
//npm install mongodb
//create server method
http.createServer(function (request, response) {
    //parse the url and extract the filename
    var pathname = url.parse(request.url).pathname;
    //print the pathname
    console.log("Request for" + pathname + "Received.");
    //read the contents of the file: pathname
    if(request.method == 'GET')
    {
        console.log("Connecting to MongoDb");
        MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true},
        function(err,client){
            console.log("Connected to MongoDB");
            const db = client.db('newdb'); // newdb database is present in the mongodb
            //find here will return everything
            //toArray to convert to array
            db.collection('student').find({}).toArray(function(err,docs) 
            {
                response.writeHead(200,{'Content-Type':'application/json'});
                response.write(JSON.stringify(docs));
                client.close();//closes to conn to the DB
                response.end();//sends http response to the http client
            })
        });   
    }
    //When the post method is called
    else
    {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
        }); 
        MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true},
        function(err,client){
            console.log("Connected to the DB");
            const db = client.db('newdb');
            db.collection('student').insertOne(JSON.parse(body)).then(r=>{
                response.writeHead(200,{'Content-Type':'application/json'});
                client.close();
                response.end();
            });
        });
    }
}).listen(4000);
console.log("server running/listening at http://localhost:4000")