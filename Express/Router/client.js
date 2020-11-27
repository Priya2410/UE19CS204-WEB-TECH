var http = require('http');
var fetch = require('node-fetch');

//fetch info
fetch('http://localhost:3000/student',{
    method : 'GET',
    headers : {'Content-Type' : 'application/json'}

})
.then(res => res.json())
.then(res => console.log(res));


//add info
fetch('http://localhost:3000/student', {
    method: 'POST',
    body:    JSON.stringify({name:"Avi",srn:"23456",dept:"ece"}),
    headers: { 'Content-Type': 'application/json' },
})
 .then(res => console.log(res));

fetch('http://localhost:3000/student/1234', {
    method: 'PUT',
    body:    JSON.stringify({name:"Neeta",srn:"234",dept:""}),
    headers: { 'Content-Type': 'application/json' },
})
 .then(res => console.log(res));

 //In order to delete AVI
 fetch('http://localhost:3000/student/23456', {
    method: 'DELETE'
})

