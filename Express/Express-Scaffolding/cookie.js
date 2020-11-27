var express = require("express");
var app = express();

var cookieParser = require("cookie-parser"); // third party middleware: use() method
app.use(cookieParser()); //data will be save in req.cookies 


//To set sameSite and secure property of a cookie
app.get("/",function(req,res){
	console.log(req.cookies.uname);
	//console.log(res.cookie("uname"));
	res.cookie("uname", "expressuser",{sameSite:true,secure:true}).send("Cookie set!!")
})

//To set max age of a cookie in milliseconds
app.get("/setexp",function(req,res){
	console.log(req.cookies.uname);
	res.cookie("uname","newuser",{maxAge:5000}).send("Cookie set!!")
})

//To delete a cookie you have to use clearCookie
app.get("/delete",function(req,res){
	console.log(req.cookies.uname);
	res.clearCookie("uname").send("Cookie cleared!!")
})
app.listen(3000,function(){
	console.log("Server up at 3000")
})