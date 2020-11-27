/*The URL module splits up a web address into readable parts.
Parse an address with the url.parse() method,
and it will return a URL object with each part of the address as properties:*/
//to import url module
var url=require('url');
//A random address which we will parse
var adr='http://localhost:8080/default.htm?year=2017&month=february';
var p = url.parse(adr, true);//Parsing the address
console.log(p.host)//The host is google,or facebook etc
//Output-localhost:8080
console.log(p.pathname)
//Output-/default.htm
console.log(p.search)
//Output-?year=2017&month=february
/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = p.query;
console.log(qdata);//OUTPUT:[Object: null prototype] { year: '2017', month: 'february' }
console.log(qdata.year);
//OUTPUT:2017