/* Here we will be acessing the mongo db datebase and using get,post,put,delete on it */
var express= require('express');

/* to start the server */
var app= express();

/* for the home page */
app.get('/',function(request,response){
    response.send('Hi,welcome to my page!');
})
/* on http://localhost:3000
Output :Hi,welcome to my page! */

/* This is for the hello sub section */
app.get("/hello", function(request,response){
    response.send("Hi There!!!")
});
/* on http://localhost:3000/hello
output Hi There!!! */

/*This is for the hello/any message */
app.get('/hello/:msg',function(request,response){
    var message = request.params.msg;
    response.send("hi there this is my message " + message);
})
/* on http://localhost:3000/hello/Priya
Output : hi there this is my message Priya*/

app.post("/hello", function(request,response){
	response.send("Hello Greeting Message saved!")
})

app.put("/hello",function(request,response){
	response.send("Hello Greeting Message updated!")
})

app.delete("/hello", function(request,response){
	response.send("Hello Greeting Message deleted!")
})

app.listen(3000, function(){
	console.log("Server listening on 3000...")
});
