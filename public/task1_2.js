function isValid(name) {
    let size, space, empty
    if (name === null || name === undefined) {
        empty = true;
    } else {
        size = name.length >= 4;
        space = name.includes(" ")
    }
    return !!(size && !empty && !space)
}


console.log(isValid("test"))
console.log(isValid(null))
console.log(isValid(undefined))
console.log(isValid("te   st"))
console.log(isValid("tst"))
console.log(isValid("TeSt Is TeSt"))
console.log(isValid("LongTest"))
