//To import fs module
var fs=require("fs")
//fs.open(filename,mode,function)
//Mode - w-write,a-append
//fd is the reference to the file
fs.open("practice.txt","w",function(err,fd)
{
    if(err) throw err
    fs.write(fd,"I love NodeJS",function(err){
        if(err) throw err
        console.log("Doneeee!");
    })
})

// Now in append mode
fs.open("practice.txt","a",function(err,fd)
{
    if(err) throw err
    fs.write(fd,"I am Priya",function(err){
        if(err) throw err
        console.log("Doneeee appended!");
    })
})