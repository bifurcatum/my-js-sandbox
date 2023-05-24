let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
}

let sum = 0
for (let obj in salaries) {
    sum += salaries[obj]
}
console.log(sum)