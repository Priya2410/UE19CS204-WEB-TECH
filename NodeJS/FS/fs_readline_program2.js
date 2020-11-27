/*we will first create an interface for the input and output using createInterface()
createInterface() method takes two arguments. The first argument will be for the standard input and the
second one will be for reading the standard output. 
 rl.close() method is used to exit the application.*/

 //If we work on a large files to read data we can use the module readline
 //stdin is standard input
 //stdout is standard output
 //question is a pre-defined method
 var readline=require('readline');
 var rl = readline.createInterface(
    process.stdin, process.stdout);
    rl.question('What is your name? ', (name) => {
       console.log('Your name is: ' + name);
       rl.close();
   });