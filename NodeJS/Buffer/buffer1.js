/*A buffer is an area of memory. JavaScript developers are not familiar with this concept, much less than C, C++ or Go developers (or any programmer that uses a system programming language), which interact with memory every day.
It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.
You can think of a buffer like an array of integers, which each represent a byte of data.
It is implemented by the Node.js Buffer class.
A buffer is created using the Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe() methods.*/
//We dont have to import buffer since its global


var buf=Buffer.from("Hey!");//Buffer is allocated for the string 'Hey!'
console.log(buf.toString())//Output- Hey!
//If you dont convert you will get the output in the array format
console.log(buf)//Without toString
//Output <Buffer 48 65 79 21>
//Buffer is treated as array
console.log(buf[0])//Output:72  //Ascii of 'H'
console.log(buf.length)//Length of buffer // output : 4

// for(i=0;i<buf.length;i++)
// console.log(buf[i]);
//OUTPUT:
//72
//101
//121
//33
//OR
for (const item of buf) {   //Iterate over the contents of a buffer
    console.log(item) //72 101 121 33
  }

//Creating a buffer from alloc method
const wuff=Buffer.alloc(15)//Size of the string must be mentioned
wuff.write("Hello class")
console.log(wuff.toString())
//Output: Hello class

const wuff=Buffer.alloc(1)//Size of the string must be mentioned
wuff.write("Hello class")
console.log(wuff.toString())
//Output:H