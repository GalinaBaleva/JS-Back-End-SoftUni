const querystring = require('querystring');

const is = require('is');

console.log(is.even(3));

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');


const qs = querystring.parse(myURL.search);

console.log(qs);
