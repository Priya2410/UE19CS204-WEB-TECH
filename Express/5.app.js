/*Pre-requisite for using ExpressJS: 
NodeJS installed - To Check, give the command: node -v
npm install express  or npm i express
*/

var express = require('express');
var app = express(); //To start the server 
//Now we will talk to a service running on port 9000
//Used on express get fetches data if you dont change anything on the data
 // '/' refers to fetch home directory
 //Here in the next line we get details from the home page
app.get('/',function(request,response){
//To get the output on the browser
//Since we are the server here we have to send an response to the client
response.send('Hello I am the service!'); 
//Basically displays on the root directory of the website for example.
})
/* Output : on localhost:9000 
Hello I am the service! */


//Used to get details of a student
app.get('/student',function(request,response){
    response.send('I am a student');
    /* So here on 'http://localhost:9000/student' you get the 
    output:
    I am a student */
})


/* Now if we type this in the browser 'http://localhost:9000/student/A' */
app.get('/student/A',function(request,response){
    response.send('I am an A section student!');
    /* Output :I am an A section student! */
})


/* Now we will do the improvised version for the responding the url */
app.get('/student/:sec',function(request,response){
    var section = request.params.sec;
    if(section == 'B')
    response.send('I am in B section');
    if(section == 'E')
    response.send('I am in E section');

    /* OR
    response.send('I am in' + section +'section');
    */

    /* Output on 'http://localhost:9000/student/B' 
    I am in B section
     
    Output on 'http://localhost:9000/student/E' 
    I am in E section */

})


app.listen(9000,function(request,response){
    console.log('Service is running!!');     //Since we haven't connected the port 9000 to a service 'O/P:Cannot GET /',we cant get anything from the port
})

/* THE FIRST ARGUMENT IN GET IS THE RESOURCE */
