"use strict"

function fank () {
    let fan = 0;

    return function () {
        return fan++;
    };
}

let result = fank();

console.log(result());
console.log(result());