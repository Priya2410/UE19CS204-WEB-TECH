//To compare two methods we use buffer method
const buf1 = Buffer.alloc(10, 'hi welcome'); //To allocate a buffer
const buf2 = Buffer.alloc(10, 'ji welcome');
var result = buf1.compare(buf2);//to compare buf1 to buf2
if(result < 0) //Buf1 compares before Buf2
{
console.log(buf1 + " comes before " +  buf2);
}
else if(result === 0) // === to compare value and type buf1=buf2
{
    console.log(buf1 + " is same as " +  buf2);
}
else
{
    console.log(buf1 + " comes after " +  buf2);
}
var buf3 = Buffer.alloc(25);
buf2.copy(buf3); //To copy buf2 to buf3
console.log("Buffer2 content is copied to Buffer3 "+ buf3.toString());
console.log(buf3.toString());
