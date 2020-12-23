"use strict";

function fib(num) {
    // base case
    if (num === 0) {
        return;
    }
    else if (num === 1) {
        return 1;
    }
    else if (num === 2) {
        return 1;
    }
    // general case
    return fib(num - 2) + fib(num - 1);
}
console.log(fib(7));