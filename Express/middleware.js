/*Middleware functions are functions that have access to the request object (req),
 the response object (res),
  and the next function in the application’s request-response cycle.
  The next function is a function in the Express router which,  when invoked, executes 
  the middleware succeeding the current middleware.- Called in order
  Each app.use(middleware) is called every time a request is sent to the server.
  app.use() used to Mounts the middleware function or mount to a specified path,the middleware function
   is executed when the base path matches. */
/*difference between .get and .use .use is used when you use an middleware functionality is similar to get*/
var express = require('express');
var app=express();//To start the server

app.use(function(request,response,next){
    console.log('First Middle Ware Function');
    next();//Calls the next middleware //next in the line
})

//ROUTES TO THE HOME PAGE
app.use("/",function(request,response,next){
    //Re routes to the home page 
    console.log('Second Middle Ware Function');
    next();//Calls the next middleware
})

app.get("/",function(request,response,next){
    console.log('Get method used here')
    response.end('I have used get mehtod here');
    next();
})

app.use("/", function(request, response){
	console.log("Route MW Function 3");	
})

app.listen(3000, function(){
	console.log("Server listening on 3000...")
});

/* Output :Server listening on 3000...
First Middle Ware Function
Second Middle Ware Function
Get method used here
Route MW Function 3 */

/* if you dont use next it doesnt know where to go next*/
/* Middle wares can be used to take care of stuff like authentication like if its valid 
the next statement is executed else some other response is sent */

/* IF THE CLIENT IS NOT A VERIFIED CLIENT THE MIDDLEWARE CAN HANDLE IT 
,INSTEAD OF GOING TO THE SERVER*/

/*NEXT FUNCTION IS INVOKED WHEN MIDDLEWARE IS USED ,IT INVOKES
THE NEXT MIDDLEWARE LINE */