console.log("linked!")

let mainContainer


const mainMenu = document.querySelector('.mainMenu')
const mainButton = document.querySelector('#mainButton')
const cellButton = document.querySelectorAll('.box')

const columns = 6
const rows = 6

mainButton.addEventListener('click', () => {
    toGameBoard()
})

// function render() {
//     mainContainer.forEach(function(pipe, index) {
//         console.log(pipe, index)
//     })
// }

// const setUp = () => {

// mainContainer = [

// ['', '', '', '', '2', '4']
// ['', '', '', '2', '4', '']
// ['', '', '2', '4', '', '']
// ['', '2', '4', '', '', '']
// ['2', '4', '', '', '', '']
// ['4', '', '', '', '', '']

// ]

// }


const sayHello = () => {
    console.log("clicked")
}

const getBoardValues = () => {

    let cellValues = []

    for (row = 1; row <= columns; row++) {
        for (col = 1; col <= rows; col++) {
            console.log(`row: ${row} column: ${col}`)
            cellValues.push(document.getElementById(`r${row}c${col}`).className.slice(-1));

        }
    }

    console.log(cellValues)
    return cellValues;
}

cellButton.forEach(cell => cell.addEventListener('click', (event) => {

    sayHello()

    // for(let i = 0; i < 4; i++) {
        if (cell.classList.contains('pipe1-rotation1')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation2')
            // cell.classList = "box pipe1-rotation" + i++
            cell.innerText = 2
            console.log("if ran")
            // event.target.classList.add('pipe1-rotation')
            // cell.innerText++
        } else if (cell.classList.contains('pipe1-rotation2')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation3')

            cell.innerText = 3
            console.log("if ran")
        } else if (cell.classList.contains('pipe1-rotation3')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation4')

            cell.innerText = 4
            console.log("if ran")
        } else if (cell.classList.contains('pipe1-rotation4')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation1')

            cell.innerText = 1
            console.log("if ran")
        } else if (cell.classList.contains('pipe1-rotation5')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation6')

            cell.innerText = 6
            console.log("if ran")
        } else if (cell.classList.contains('pipe1-rotation6')) {
            event.target.className = ""
            event.target.classList.add('box')
            event.target.classList.add('pipe1-rotation5')

            cell.innerText = 5
            console.log("if ran")
        } 

        // call
        const currentBoardValues = getBoardValues();
    }))
        
        // cell.classList.contains('pipe1-rotation2')
        //  || cell.classList.contains('pipe1-rotation3') || cell.classList.contains('pipe1-rotation4')) {
        //     event.target.className = ""
        //     event.target.classList.add('box')
        //     event.target.classList.add('pipe1-rotation' + i)
        //     cell.classList = "box pipe1-rotation" + i++
        //     cell.innerText++ 
        //     console.log("if ran")

        //     event.target.classList.add('pipe1-rotation')
        //     cell.innerText++
        // } else {
        //     event.target.className = ""
        //     event.target.classList.add('pipe1-rotation1')
        //     cell.innerText = 1
        //     console.log("else ran")
        // }

    // }



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
