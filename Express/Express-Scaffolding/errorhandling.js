//Error Handling
//Middleware function to handle errors
//app.use(["/"],err,req,res,next) -- Error handle MW function

var express = require("express");
var app = express();

/* first approach to handle error */
app.use("/student", function(error, request, response,next){
	console.log(error.stack);
	response.status(500).send("Something went wrong")

})

/*Second approach to handle error */
app.get("/student/:id",function(request,response,next){
	if(request.params.id==="2000"){
		var err = new Error("Something Went Wrong");
        console.log(err)
	}
	else{
		response.send("Everything is fine with "+request.params.id);
		next() //Go to next middle ware
	}
})

app.use("/student",function(req,res){
	console.log("I am fine...")
})
app.listen(3000, function(){
	console.log("Server listening on 3000...")
});

/* localhost:3000/student/200
Everything is fine with 200
*/

/*localhost:3000/student/2000
Error: Something Went Wrong
    at /Users/priyamohata/Desktop/Express/Express-Scaffolding/errorhandling.js:18:13
    at Layer.handle [as handle_request] (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/layer.js:95:5)
    at /Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/index.js:281:22
    at param (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/index.js:354:14)
    at param (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/index.js:365:14)
    at Function.process_params (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/index.js:410:3)
    at next (/Users/priyamohata/Desktop/Express/Express-Scaffolding/node_modules/express/lib/router/index.js:275:10)
*/