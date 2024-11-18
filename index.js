const cells = document.getElementsByClassName('cell');
const players = ['X', 'O'];
let currentPlayer = players[0];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const winStatus = () => {
    for(let i = 0;i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i];
        if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
            return true;
        }
    }
    return false
}