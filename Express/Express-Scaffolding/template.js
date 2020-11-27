/*Creation of a basic template */
var express = require('express');
//Initiate the server
var app=express();

/* Run npm install pug --save */

//To import pug we have to perform these two steps
app.set('views','./views'); //views directory to place all .pug files
app.set('view engine','pug');

//Home route
//Since we are using a template we have to use render
app.get('/',function(request,response){
    response.render("index.pug");
})

app.listen(3000);

/* The index.pug file has h1 content 
we should just mention the tag name and content
*/

/* Output on localhost:3000
Hello A,B,E Sections (in h1 format)*/