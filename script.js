console.log("linked!")

let mainContainer
const mainMenu = document.querySelector('.mainMenu')
const mainButton = document.querySelector('#mainButton')
const cellButton = document.querySelectorAll('.box')

mainButton.addEventListener('click', () => {
    toGameBoard()
})

// function render() {
//     mainContainer.forEach(function(pipe, index) {
//         console.log(pipe, index)
//     })
// }

const setUp = () => {

mainContainer = [

'', '', '', '', '', '',
'', '', '', '', '', '',
'', '', '', '', '', '',
'', '2', '6', '', '', '',
'', '', '', '', '', '2',
'', '', '', '', '4', '',

]
}


const sayHello = () => {
    console.log("clicked")
}

cellButton.forEach(cell => cell.addEventListener('click', () => {
    sayHello()
    if (cell.innerText < 4) {
        cell.innerText++
    } else {
        cell.innerText = 1
    }
    
    // cell.innerText = 4
})
)

const toGameBoard = () => {
    mainMenu.classList.add('void')
    // cellButton.forEach(cell => (), innerText = Math.floor(Math.random()*5)
}


//  const shuffleCells = () => {
//     cellButton.forEach(cell => {
//         let shuffled = Math.floor(Math.random()*20);
//         cell.style.order = shuffled
//     })
// }

// gameWin = 
    


    // box.innerText = "4"
