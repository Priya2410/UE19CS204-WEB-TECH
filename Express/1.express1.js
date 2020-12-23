var express = require("express"); // npm install express 

var app = express();
//var MongoClient = require("mongo").MongoCLient;

app.get("/", function(req, res){
	res.send("Welcome to my page!!!")
})

/* the elements in the database are displayed */
app.get("/hello", function(req,res){
//	MongoClient.collection("hello").find({})
})

/* used to find an element with an particular message */
app.get("/hello/:msg", function(req,res){		// localhost:3000/hello/greeting
	//req.params.msg
//	MongoClient.collection("hello").findOne({msgtype:req.params.msg})
})

/* to insert a particular element basically creation of an element */
app.post("/hello", function(req,res){
	res.send("Hello Greeting Message saved!")
//	MongoClient.collection("hello").insert({})
})

/*Used to update a particular element */
app.put("/hello",function(req,res){
	res.send("Hello Greeting Message updated!")
//	MongoClient.collection("hello").update({})
})

/*used to delete an element */
app.delete("/hello", function(req,res){
	res.send("Hello Greeting Message deleted!")
//	MongoClient.collection("hello").delete({})
})
app.listen(3000, function(){
	console.log("Server listening on 3000...")
});
