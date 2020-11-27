var express = require("express"); // npm install express --save
var MongoClient = require("mongodb").MongoClient;
/* to create an router */
var router = express.Router();
/* router is used to route to multiple pages */

/*Middleware tasks that happen between request,response*/
/*Multer is a node.js middleware for handling multipart/form-data,
which is primarily used for uploading files. */
/* if we want to upload any data to the database we use multer */
var multer = require('multer'); // npm install multer; 
var upload = multer();  //Reference variable of multer
//Converts the data into array and uploads it to the mongodb
router.use(upload.array())

//req.body
//Here '/' refers to /student 
router.get("/", function(request,response)
{ // GET /student?hostel=yes
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,db)
	{
		if(err) throw err;
		const dbo = db.db('newdb'); //use newdb;
		dbo.collection('student').find(request.query).toArray(function(err,objs){ 
			// find({})
			if(err) throw err
			response.send(objs)
		});
	});
});
/*output for get request :
on localhost:3000/student
** Basically in array format all the student details are mentioned**
[{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"}]
*/


router.get("/:sid", function(request,response){ 
// GET /student/1234
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,db){
		if(err) throw err;
		const dbo = db.db('newdb'); //use newdb;
		dbo.collection('student').findOne({srn:request.params.sid},function(err,obj){
			if(err) throw err // find({})
			response.send(obj)
		});
	});
});
/*output for get request :
**Only student with the same SRN as given is fetched**
on localhost:3000/student/1234
** Basically in array format all the student details are mentioned**
{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"}
*/

/*this post is linked with client.js */
router.post("/", function(request,response){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,db){
		if(err) throw err;
		const dbo = db.db('newdb'); //use newdb;
		dbo.collection('student').insertOne(request.body,function(err,objs){ // find({})
			response.send("Save Successful!!!")
		});
	});
})
/*To execute first execute server file ie express_router.js
and then the client.js file
When you execute client.js you get this output
Response {
  size: 0,
  timeout: 0,
  [Symbol(Body internals)]: {
    body: PassThrough {
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: true,
      _transformState: [Object],
      [Symbol(kCapture)]: false
    },
    disturbed: false,
    error: null
  },
  [Symbol(Response internals)]: {
    url: 'http://localhost:3000/student',
    status: 200,
    statusText: 'OK',
    headers: Headers { [Symbol(map)]: [Object: null prototype] },
    counter: 0
  }
Output on browser:
Avi is added
[{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"},{"_id":"5fadef11ff541e7f921b6ee7","name":"Avi","srn":"23456","dept":"ece"}]
*/

//Used to update the database
router.put("/:sid", function(req,res){
	//PUT /student/1234 message body - {srn:"1234", name:"", dept:"ece"}
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').update({srn:req.params.sid},req.body,function(err,objs){
			res.send("Update Successful!!!")
		});
	});
})
/* Output for put 
In console:
Response {
  size: 0,
  timeout: 0,
  [Symbol(Body internals)]: {
    body: PassThrough {
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _writableState: [WritableState],
      writable: false,
      allowHalfOpen: true,
      _transformState: [Object],
      [Symbol(kCapture)]: false
    },
    disturbed: false,
    error: null
  },
  [Symbol(Response internals)]: {
    url: 'http://localhost:3000/student/1234',
    status: 200,
    statusText: 'OK',
    headers: Headers { [Symbol(map)]: [Object: null prototype] },
    counter: 0
  }
}
****  In browser *****
so basically since its updated we need to check the new srn number
I am checking for Neeta initally the details of Neeta were
{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"}
after updation the details can be seen at localhost:3000/student/234
{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"234","dept":""}
*/

router.delete("/:sid", function(req,res){
	//DELETE /student/1234
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection('student').delete({srn:req.params.sid}, function(err,objs){
			if(err) 
				res.send("Delete Failed!!!")
			else
				res.send("Delete Successful!!!")
		});
	});
})
module.exports = router;