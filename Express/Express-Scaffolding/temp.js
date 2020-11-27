var express=require('express');
var app=express();

app.set('views','./views');
app.set('view engine','pug');

app.get('/profile',function(request,response){
    response.render('dynamic.pug',{
        name:'Priya',
        profile:'http://www.google.com'
    })
})

app.get('/profile/:name',function(request,response){
    response.render('dynamic.pug',{
        name:request.params.name,
        profile:'http://www.twitter.com'
    })
})

app.listen(9000); 
/* Output on :http://localhost:9000/profile
welcome Priya
Link
*/
/* Output on :http://localhost:9000/profile/parth
welcome parth
Link
*/
