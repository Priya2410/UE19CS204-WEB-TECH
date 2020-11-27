//Write to a json file
/* BEFORE WRITING
[{"name":"John","age":21,"language":["JavaScript","PHP","Python"]},
{"name":"Smith","age":25,"language":["PHP","Go","JavaScript"]},
{"name":"New User","age":30,"language":["PHP","Go","JavaScript"]}]
*/

var fs=require('fs');
var file=require("./sample1");//Read the sample1.json file completely
//We have defined a new user here we have to push it to the file
var user={name:"Anagha",age:19,language:['PHP','Swift','Go']}
file.push(user);
//In order to add the content you have to convert it to JSON first and then add
fs.writeFile('sample1.json',JSON.stringify(file),err=>{
if(err) throw err
console.log("Content written");
});
//Output after writing in sample1.json
// [{"name":"John","age":21,"language":["JavaScript","PHP","Python"]},{"name":"Smith","age":25,"language":["PHP","Go","JavaScript"]},{"name":"New User","age":30,"language":["PHP","Go","JavaScript"]},{"name":"Anagha","age":19,"language":["PHP","Swift","Go"]}]


