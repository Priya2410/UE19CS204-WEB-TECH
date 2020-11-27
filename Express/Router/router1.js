/* What is an express router?
In a project you will have multiple files so we have to route it
to different files - basically travel between files.
express.Router() is a function used to create router object */

var express = require('express');
//To run a server
var app=express();
var port=3000;

//single routing
//To create a router
var router = express.Router();

//To go to the home page
router.get('/',function(request,response,next){
    console.log('Router Working');

    response.end();
})

//To use the router //IMPORTANT !!!
app.use(router);

app.listen(port,function(err){
    if(err) console.log(err);
    console.log("Server is listening on :", port);
})

/*Output on console
Server is listening on : 3000
First request : localhost:3000
Output : Nothing is displayed but no error also  since 
we havent sent anything on response
Output on console: Router Working*/
