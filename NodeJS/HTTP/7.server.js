var url=require('url')
var http=require('http')
var fs=require('fs')
//Buffer is a small piece of memory as soon as it receives the data from the client/server it is placed in the file
//As in the data flows the buffer fills in 
http.createServer(function(request,response){
    if(request.method=='POST')
    {
        var q=url.parse(request.url);//To extract client side url
        var filename="."+q.pathname;//pathname will have the file-sample1.txt
    }
    //Creating an empty buffer - an array here
    var body=[];
    //Event handling mechanism - as data flows-This is the event
    // .request.on(event: "close", listener: () => void)
    //Pieces of data are passed not the etnire thing
    request.on('data',(chunk)=>{
        body.push(chunk);//We push the chunks to the file
        console.log(chunk.toString())
    });
    //After all the chunks are pushed - an 'end' event is triggered
    request.on('end',()=>{
        body=Buffer.concat(body).toString();//To combine all the chunks and convert to string
        fs.appendFile(filename,body,function(err,data)
        {
            if(err) throw err
            response.end("Message saved in sample1.txt")
        });
    });
}).listen(8080)