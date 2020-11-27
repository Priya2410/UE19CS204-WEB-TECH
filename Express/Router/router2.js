//Multiple router objects
const { response } = require('express');
var express = require('express');

var app=express();
var port=3000;

// Multiple routing 
var router1 = express.Router(); 
var router2 = express.Router(); 
var router3 = express.Router(); 

/* router 1 routes to the user page 
router 2 routes to the admin page 
router 3 routes to the student page */

router1.get('/user', function (req, res, next) { 
    console.log("User Router Working"); 
    res.send('I am the user file - Router 1');
    res.end(); 
}); 

router2.get('/admin', function (req, res, next) { 
    console.log("Admin Router Working");
    res.send('I am the admin file - Router 2');
    res.end(); 
}); 
  
router3.get('/student', function (req, res, next) { 
    console.log("Student Router Working"); 
    res.send('I am the student file - Router 3');
    res.end(); 
}); 
  
//Using the three routers
app.use(router1); 
app.use(router2); 
app.use(router3); 
   

app.listen(port, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", port); 
});

/* output : Server listening on PORT 3000
on localhost:3000
Output on page :Cannot GET /
*/

/* output : Server listening on PORT 3000
on localhost:3000/user
Output on page :I am the user file - Router 1
Output on console : User Router Working
*/

/* output : Server listening on PORT 3000
on localhost:3000/admin
Output on page :I am the admin file - Router 2
Output on console :Admin Router Working
*/

/* output : Server listening on PORT 3000
on localhost:3000/student
Output on page :I am the student file - Router 3
Output on console :Student Router Working
*/