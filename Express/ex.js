var buf2=Buffer.from('for');
var buf1=Buffer.from('demo for buffercopy');
buf2.copy(buf1,2,0);
console.log(buf1.toString())