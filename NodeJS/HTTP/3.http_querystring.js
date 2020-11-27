// Read the Query String -The function passed into the http.createServer() has a req argument that represents
//  the request from the client, as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:*/
var http=require('http');
http.createServer(function(request,response){
    //response.writeHead(statusCode,contentType)
    response.writeHead(200,{'Content-Type':'text/plain'});
    //if statusCode-200 then the request is handled successfully
    //content type can be plain or html
    response.write(request.url);
    //Url is the property associated with the request
    //Url helps in reading the query string
    response.end();
}).listen(9000);
//if you type in the browser localhost:9000/priya
//you get the output '/priya' as the output