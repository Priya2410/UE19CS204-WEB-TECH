var express=require('express');
const { nextTick } = require('process');
val=Number();
var app=express();
app.use("/",function(request,response,next){
    response.cookie('count',0).send('Done '+ val);
    val=request.cookie.count;
    val=val+1;
    next();
})

app.listen(9000,function(err){
    if (err) throw err;
});