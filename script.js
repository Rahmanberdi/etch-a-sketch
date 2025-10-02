

const container = document.getElementById("container");


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover',() =>{
            cell.style.backgroundColor = 'black';
        })
        cell.className = 'cell';
        row.appendChild(cell);
    }
    container.appendChild(row);
}
const reset_button = document.createElement('button');
reset_button.className = 'reset_button';
reset_button.innerText = 'Reset';
container.appendChild(reset_button);


