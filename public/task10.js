let userName = prompt("Enter your name:", '');
if (userName == '' || userName == null) {
    alert("Cancelled")
} else if (userName == "Admin") {
    let pwd = prompt("Enter password", '');
    if (pwd == '' || pwd == null) {
        alert("Cancelled")
    } else if (pwd == "ImTheBoss") {
        alert("Welcome");
    } else
        alert("Wrong password");
} else {
    alert("Have we met before?");
}