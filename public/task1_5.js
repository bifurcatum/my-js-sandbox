function truncate(str, maxlength) {
    let output
    if (str.length > maxlength) {
        output = str.slice(0, maxlength - 1) + "…"
    } else {
        output = str
    }
    return output
}


console.log(truncate("Invitation to the party", 5))
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
console.log(truncate('Всем привет!', 20))
console.log(truncate("Let's get \n out of here", 21))
