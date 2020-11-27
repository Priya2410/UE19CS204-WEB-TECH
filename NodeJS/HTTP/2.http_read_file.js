//To import the http module
//This program talks about how to open a file which resides on the server and return its content
var http=require('http')
var fs=require('fs')//since there is a file involved
http.createServer(function(request,response)
{
    //To read the data from the file we use readFile
    fs.readFile('simple.txt',function(err,data)
    {
        if(err) throw err
        response.write(data);
        return response.end();
    })
}).listen(9000)