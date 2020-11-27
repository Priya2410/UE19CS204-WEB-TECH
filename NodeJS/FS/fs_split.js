var fs=require('fs');
var data=fs.readFileSync('test.txt','utf-8');
// console.log(data);
var lines=data.split('\n')
//JS method split to split based on new line
//Gives a array [ '101,Ramu', '102,Somu', '103,Domu', '104,Xomu' ] of each line
// console.log(lines)
for(i=0;i<lines.length;i++)
{
    var words=lines[i].split(',')
    //Split based on comma
    console.log(words[0]);//to print the 101,102,103
    console.log(words[1]);//to print the Ramu,Somu,Domu,Xomu
}
//OR
//Anonymous function which takes in argument line
//forEach calls the anoynmous function for every element in array
// lines.forEach((line)=>{
// 	var words = line.split(',');
// 	console.log(words[0]);
// })