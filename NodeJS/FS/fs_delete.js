var fs=require("fs")
//Unlink take filename,function
fs.unlink('myfilename2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });