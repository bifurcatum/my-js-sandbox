let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
}

function multiplyNumeric(menu) {
    for (let obj in menu) {
        if (tipeof(menu[obj]) === Num) {
        menu[obj] *= 2}
    }
}
