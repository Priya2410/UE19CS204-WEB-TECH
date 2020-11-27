const buf1 = Buffer.alloc(10, 'hi welcome'); //To allocate the buffer
const buf2 = Buffer.alloc(17, 'to pes university'); //To allocate the second buffer
console.log(buf1.toString());
console.log(buf2.toString());
const totallength = buf1.length + buf2.length;
console.log(totallength);
//Buffer.concat(list: readonly Uint8Array[], totalLength)
const buf3 = Buffer.concat([buf1,buf2],totallength);
console.log(buf3.toString());
console.log(buf3.length);

//alloc() creates a buffer
//length is the length property
//concat first argument is [buf1,buf2], length 