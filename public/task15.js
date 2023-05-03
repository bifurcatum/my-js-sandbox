"use strict"
function min(a, b) {
    return (a <= b) ? a : b;
}

let x = +prompt()
let y = +prompt()
alert(min(x, y))