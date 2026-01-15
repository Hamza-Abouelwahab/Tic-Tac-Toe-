let statusText = document.querySelector("#statusText")
let cells = document.querySelectorAll(".cell")
let restardBTn = document.querySelector("#restardBtn")
let player = "X"
const winCondition = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let board = ["","","","","","","","",""]
let runing = true

cells.forEach(cell => {
    cell.addEventListener("click" , () => {
        if(cell.textContent || !runing) return
        let cellIndex = parseInt(cell.getAttribute("cellIndex")) 
        board[cellIndex] = player
        cell.textContent = player
        checkWin()
        if (runing) {
            player = player === "X" ? "O" : "X"
            statusText.textContent = `${player}'s turn`
            
        }
    })
})
restardBTn.addEventListener("click" , clearAllBtns)

function checkWin() {
    for(let i = 0 ; i < winCondition.length ; i++ ){
        let condition = winCondition[i]
        let a = board[condition[0]]
        let b = board[condition[1]]
        let c = board[condition[2]]
        if( a == b && a == c && a !== "" ){
                statusText.textContent = `${a} Winner`
                runing = false
                return
        } 
    }
    if(!board.includes("")){
        statusText.textContent = `Draw`
        runing = false
    }
}
function clearAllBtns() {
    board.fill("")
    cells.forEach(cell => cell.textContent = "")
    runing = true
    player = "X"    
    statusText.textContent = `${player}'s turn`
}