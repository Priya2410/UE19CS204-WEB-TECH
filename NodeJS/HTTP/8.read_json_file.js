//Reading a json file
//There are two ways to read a json file 
//1.using require method
//Name of the file
var users=require('./sample1.json')
console.log(users);
//Output
// [
//     {
//       name: 'John',
//       age: 21,
//       language: [ 'JavaScript', 'PHP', 'Python' ]
//     },
//     { name: 'Smith', age: 25, language: [ 'PHP', 'Go', 'JavaScript' ] },
//     {
//       name: 'New User',
//       age: 30,
//       language: [ 'PHP', 'Go', 'JavaScript' ]
//     }
// ]

//2.Using File system(fs) module we can read the contents
var fs=require('fs');
fs.readFile('sample1.json',function(err,data){
    if(err) throw err
    users=JSON.parse(data)//since its a JSON file we have to parse it 
    console.log(users);
})
// OUTPUT 
// [
//     {
//       name: 'John',
//       age: 21,
//       language: [ 'JavaScript', 'PHP', 'Python' ]
//     },
//     { name: 'Smith', age: 25, language: [ 'PHP', 'Go', 'JavaScript' ] },
//     {
//       name: 'New User',
//       age: 30,
//       language: [ 'PHP', 'Go', 'JavaScript' ]
//     }
// ]
