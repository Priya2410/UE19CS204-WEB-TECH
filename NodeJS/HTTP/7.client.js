//Client Side Scripting
//we will use third party module called 'node-fetch'
//we use npm install 'modulename'(which we want to import)
//After installing a package.json file is included whenver there is a third party module

var fetch=require('node-fetch');
//fetch - it fetches a file in the server
fetch("http://localhost:8080/sample1.txt",{
   method:'POST',
   headers:{'content-type':'application/json'},
   body:JSON.stringify({"name":"Priya","srn":"12347"})
   //This data will be pushed to the file sample1.txt
   //Header talks about what type of content does the server expect
})
.then((response)=>response.text())//Response from fetch must be in text format we can also print it on the console
.then((response)=>console.log(response))