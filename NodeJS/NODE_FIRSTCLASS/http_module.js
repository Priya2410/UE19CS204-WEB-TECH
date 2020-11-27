//Helps in transfering files
//Server provides multiple services
var http=require("http")
//Creating a server there are two areguments by default request and response
http.createServer(function(request,response){
response.write("Welcome back Folks!!!")
response.end();
}).listen(9000)
//port is 9000 