var fs = require('fs');
var data = '';

//create a readable stream
var readerstream = fs.createReadStream('./data.txt');
//setting the encoding
readerstream.setEncoding('UTF-8');
//Handle the stream events  -> data, end, error
//When we receive the data
//If file isnt present there is an error
readerstream.on('data',function(chunk)
{
	data=data+chunk
 });
//When end is triggered
readerstream.on('end',function(chunk)
{
    console.log(data);
});
readerstream.on('err',(chunk)=>
{
    console.log(err.stack);
});
//Output:
//Attitude is a little thing that makes a big difference