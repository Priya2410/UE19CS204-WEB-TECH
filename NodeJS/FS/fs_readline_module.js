/* we need a listener for reading the input from the user and displaying it to the console.
For this purpose, Readline Module has a listener method called on() --- that will take two parameters.
The first parameter will the event and the second parameter will be a callback function that will return 
the output to the console.
Here, rl.on() method takes the first argument as line event.
This event is invoked whenever the user presse Enter key.   */
//Importing fs module
var fs=require('fs');
const { SourceMap } = require('module');
//Importing readline module
var readline=require('readline');
//Creating an interface
//we read the input from a file and output is given to the console
rl=readline.createInterface({
    input:fs.createReadStream("test.txt"),//as the input is read it is fed here it doesnt wait completely for the file to be read
    output:process.stdout,
    terminal:false//If we dont write this we will get the lines of the file too
})
//We have to use a listener method so that we can read each line in the file
rl.on('line',function(line){
    var words=line.split(',');
    console.log(words[1]);
})
//prints 
//Ramu
//Somu
//Domu
//Xomu
