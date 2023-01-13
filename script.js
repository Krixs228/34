let cells = document.querySelectoreAll('#filed td');
console.log(cells);

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function () {
            if (i % 2 == 0) {
                this.textContent = 'x';
            } else {
                this.textContent = '0';
            }
            i++;
        })
    }


}

start(cells);