var fs = require('fs');
var data = 'Attitude is a little thing that makes a big difference';
//create a readable stream
//If file isnt present creates a new file
var writerstream = fs.createWriteStream('./fata.txt');
//setting the encoding
writerstream.write(data,'UTF-8');
//Mark the end of the file
writerstream.end();
//Handle the stream events  -> finish, error
writerstream.on('finish',function()
{
    console.log('write completed');
});
writerstream.on('error',function(err)
{
    console.log(error.stack);
});
console.log('program ended');