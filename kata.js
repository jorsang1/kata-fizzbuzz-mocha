/*
    kata.js
    Kata Fizz Buzz in Node JS with Mocha
    By Jordi Sanchez
*/
exports.fizzbuzz = function (number){
    if ((number % 3 == 0) && (number % 5 == 0)) { return "FizzBuzz"; }
    if (number % 3 == 0) { return "Fizz"; }
    if (number % 5 == 0) { return "Buzz"; }
    return number;
};
