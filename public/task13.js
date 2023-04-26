"use strict"
let n = +prompt()
let i
for (i = 2; i <= n; i++) {
    for (let d = 2; d <= i; d++)
        if (i % d !== 0) {
            continue
        } else if (d !== i) {
            break
        } else {
            alert(i)
        }
}

