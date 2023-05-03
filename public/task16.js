"use strict"
function pow(a, n) {
    if ((n > 0) && (n % 1 === 0)) {
        return (a ** n);
    } prompt("Error")
}

let x = +prompt()
let y = +prompt()
alert(pow(x, y))