

const container = document.getElementById("container");
const reset_button = document.createElement('button');
reset_button.className = 'reset_button';
reset_button.innerText = 'Reset';
let grid_size = 16;
reset_button.addEventListener('click', () => {
    grid_size = prompt('Enter grid size:');
    if (grid_size > 100) {
        grid_size = 100;
    }
    height_width = 800/grid_size;
    remove_grid();
    make_grid();
    container.appendChild(reset_button);

})
let height_width = 800/grid_size;




function make_grid() {
    for (let i = 0; i < grid_size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < grid_size; j++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseover',() =>{
                cell.style.backgroundColor = 'black';
            })
            cell.className = 'cell';
            cell.style.width = height_width-2 + 'px';
            cell.style.height = height_width-2 + 'px';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function remove_grid(){
    document.querySelectorAll('.row').forEach((row) => row.remove());
    document.querySelector('.reset_button').remove();
}

make_grid();
container.appendChild(reset_button);


