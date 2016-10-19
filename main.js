/*
    main.js
    Kata Fizz Buzz in Node JS with Mocha
    By Jordi Sanchez
*/
var kata = require("./kata");

//Run
for(var i=1; i <= 100; i++) {
    console.log(kata.fizzbuzz(i));
}
