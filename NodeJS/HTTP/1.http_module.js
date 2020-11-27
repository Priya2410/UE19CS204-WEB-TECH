//Based on the request server sends the output
//Server serves multiple clients at the same time

//To import http module
var http=require('http')
//To create a server
//http.createServer(function(request,response))
http.createServer(function(request,response)
{
    //This writes to the web page on the particular port since out default client is the browser
    response.write("Welcome to HTTP Module!");
    response.end();//This is necessary as there might be multiple lines in response
}).listen(9000);
