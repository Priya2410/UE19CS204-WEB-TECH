var fs=require("fs");
//to rename a particular file
//fs.rename(old name,new name,function)
fs.rename('practice.txt','example.txt',function(err){
    if(err) throw err
    console.log("Done successfully");
})f