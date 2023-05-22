let table;
table = document.getElementById('js-teachers');
function highlight(table) {
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        if (row.cells[3].dataset.available === 'true') {
            row.classList.add('available');
        } else if (row.cells[3].dataset.available === 'false') {
            row.classList.add('unavailable');
        } else if (row.cells[3].dataset.available === undefined) {
            row.hidden = true
        }
    }
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        console.log(row.cells[2].textContent)
        if (row.cells[2].textContent === 'm') {
            row.classList.add('male');
        } else if (row.cells[2].textContent === 'f') {
            row.classList.add('female');
        }
    }
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        if (row.cells[1].textContent < 18) {
            row.style = "text-decoration: line-through";
        }
    }
}
highlight(table)