var http = require('http');
var fetch = require('node-fetch');
//fetch info
fetch('http://localhost:4000',{
    method : 'GET',
    headers : {'Content-Type' : 'application/json'}
})
//The response is a json file
.then(res => res.json())
.then(res => console.log(res));

//add info 
//since we are updating data we use post
// fetch('http://localhost:4000/newdb', {
//     method: 'POST',
//     body:    JSON.stringify({"name":"Amar","Univ":"PESU"}),
//     headers: { 'Content-Type': 'application/json' },
// })
//  .then(res => console.log(res));