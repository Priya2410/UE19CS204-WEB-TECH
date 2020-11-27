//Inbuilt modules
// HTTP,FS,Cryp
//FS-FILE SYSTEM
//CRYP-cryptography

//HERE WE TALK ABOUT FS
//METHOD 1.to include fs module

var fs=require("fs")
//STATISTICS OF A PARTICULAR FILE
fs.stat("simple.txt",function(err,stats){
if(err) throw err
console.log("Statistics of simple.txt file is :",stats);
})

//To read a file
var fs=require("fs")
//STATISTICS OF A PARTICULAR FILE
//File contents are in binary if second argument(utf-8) encoding isnt given
fs.readFile("simple.txt","utf-8",(err,data)=>{
if (err) throw err
console.log("The file contents are:",data);
})
console.log("Reading contents")//This is printed first because NON BLOCKING I/O
//Other operations stats and readFile gets executed later
//Returns statistics - birthtime,changetime,modified time,user id,group id etc.
//The function stat either returns a error or the statistics

