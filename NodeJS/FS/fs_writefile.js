//To write in the file
//Using file system module
var fs=require('fs');
//To write in the file
//fs.writeFile 
//fs.open in w mode or a mode - fs.write w is write mode a is append mode
//fs.appendFile
//This file 'newfile.txt' if doesnt exist is created or normally written
fs.writeFile("newfile.txt",
 "Hello,This is the content to be written into the file",
 function(err){
     if(err) throw err
     console.log("Successfully Written")
 })
 //writeFile overwrites
 fs.writeFile("newfile.txt",
 "Hello,This is Priya",
 function(err){
     if(err) throw err
     console.log("Successfully Written")
 })
//Adds in the new content
 fs.appendFile("newfile.txt","\nHello I am modified",
 function(err)
 {
     if(err) throw err
     console.log("Modified successfully")
 })
 