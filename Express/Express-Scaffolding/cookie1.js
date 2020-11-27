/*Cookies : small piece of data that is sent along with the request and response objects - HTTP
Cookies are always name:value pairs
application: 1. user tracking: if new or old user - userid(uid)
             2. session management: (Login/logout of a user with uid)
             How long have we stayed here , the time you have spent
npm i --save cookie-parser */

/*
Client ->Request->Server ->Response+Cookie is sent by the Server 
So when the client sends the same request again it is sent with a cookie to the server
*/

/*For example if we login into the account,we get a pop up to save our password ,
and next time the saved content is shown */
/* Since cookie-parser is a third party middleware we have to use() */

var express = require("express");
var app = express();

var cookieParser = require("cookie-parser"); // third party middleware: use() method
app.use(cookieParser()); //data will be save in req.cookies

app.get('/',function(request,response){
    // response.cookie("Nameofcookie","ValueofCookie").send("Message");
    //To set the cookie
    response.cookie("username","ABESection").send("Cookie is set!");
    //Reading the cookie
    console.log(request.cookie.username);
})

app.listen(3000,function()
{
    console.log("Server set at 3000");
})

/* Localhost:3000
Cookie is set!
Go to inspect element >Storage >Cookie >See the cookie for this session*/
/*Output in photos */