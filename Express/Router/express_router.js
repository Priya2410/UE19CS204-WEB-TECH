/* connecting express running on NodeJS to MongoDB to add,update,delete etc*/
/* get to read data
put to update data
post to inserting data
delete to delete data */

var express=require('express');
//To run the server
var app=express();

//For mongodb 
//npm install mongodb
//This helps in connecting to database
var MongoClient = require('mongodb').MongoClient;

/* Third party middleware Body-Parser used to parse the 
request message can be in json or text format and convert to
readable content */
/* parses the data flowing between client and server */
var bodyParser = require('body-parser');

//To use bodyParser body section will be populated with the message from the client
//Since its a middleware we use bodyParser
app.use(bodyParser.json());

//goes to the home page
app.get('/',function(request,response){
    //Sends the response to the browser
    response.send('Welcome to my page !!');
})

//The file student.js will be included here
var studentrouter=require('./student.js');

//To route to the student page
app.use("/student",studentrouter);


app.listen(3000, function(){
	console.log("Server listening on 3000...")
})

/* Output for : http://localhost:3000
Welcome to my home page! */

/*output for get request :
on localhost:3000/student
** Basically in array format all the student details are mentioned**
[{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"}]
*/

/*output for get request :
**Only student with the same SRN as given is fetched**
on localhost:3000/student/1234
** Basically in array format all the student details are mentioned**
{"_id":"5fa0ca4d7f352718f89cf965","name":"Neeta","srn":"1234","hostel":"yes","section":"E"}
*/



