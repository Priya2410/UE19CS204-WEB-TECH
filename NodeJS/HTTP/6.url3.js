var http=require('http')
var fs=require('fs')
var url=require('url')

//Create a server
http.createServer(function(request,response){
    // parse(urlStr: string, parseQueryString: true)-RETURNS THE UrlWithParsedQuery
    var q=url.parse(request.url,true);
    var filename='.'+q.pathname;//by default there would be a slash included
    fs.readFile(filename,function(err,data){
        if(err)
        {
            //If there is an error we display the data
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end("404 Error- FILE NOT FOUND!");
        }
        response.writeHead(200,{'Content-Type':'text/html'});
        var obj=JSON.parse(data);//We parse the data in the file,since the file is in JSON form
        var query=q.query;//query is present in the URL module splits the query and returns the part after '/'
        if(obj.srn == query.srn)//If the data in the file matches the srn in the query we write it to the page
        {
            response.write(obj.dept)//If its true we print the department
            response.end();
        }
    })
}).listen(8080);

//Input given : http://localhost:8080/sample.txt?srn=1234
//Output : cse
//If you have more data we have to split the data and read.

//Input http://localhost:8080/summer.txt
//Output 404 Error- FILE NOT FOUND!