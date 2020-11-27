var express = require('express');
var app= express() //To start the server

//Any id can be given 
//Here user is a resoucre 
//get accepts a resource with id
app.get('/user/:id',function(request,response,next){
    console.log('Before request handler');
    next();
})

app.get('/user/:id',function(request,response,next){
    console.log('Handling Request');
    response.sendStatus(200); //Basically to show that our request is handled successfully
    next();
})

app.get('/user/:id',function(request,response,next)
{
    console.log('After request handler');
    next();// not necessary since there is no middleware after this
})

app.listen(3000,function()
{
    console.log('App is listening on port 3000');
})

/* Output on console : App is listening on port 3000
Output on localhost:3000/user/123 
OK
(basically the status message of 200 is OK)
On console:
Before request handler
Handling Request
After request handler */


/*Next Request
for localhost:3000/user
O/P: Cannot GET /user

on console:Before request handler
Handling Request
After request handler
*/

