console.log("linked!")


const mainMenu = document.querySelector('.mainMenu')
const mainButton = document.querySelector('#mainButton')
const cellButton = document.querySelectorAll('.box')
const mainContainer = document.querySelector('#mainContainer')
const secondContainer = document.querySelector('#secondContainer')
const thirdContainer = document.querySelector('#thirdContainer')

// The 2nd and 3rd round screens will be hidden until initial rounds are completed
secondContainer.classList.add('void');
thirdContainer.classList.add('void');

const columns = 6
const rows = 6

// displays main screen and dissapears once start button is pressed
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

// const getBoardValues = () => {

//     let cellValues = []

//     for (row = 1; row <= columns; row++) {
//         for (col = 1; col <= rows; col++) {
//             // console.log(`row: ${row} column: ${col}`)
//             cellValues.push(document.getElementById(`r${row}c${col}`).className.slice(-1));

//         }
//     }

//     console.log(cellValues)
//     return cellValues;
// }



// allows the illusion of rotation of different pipes as the user cycles through and clicks each cell
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
        // const currentBoardValues = getBoardValues();


        // These 3 if statements manage all 3 rounds and hide/add different stages after the round is won. This also
        // includes the logic behind the solution matching based on what the user has clicked when cycling through the
        // pipes. If they find the way to the end, it will match the solution set and start the next round.
        if (
            document.querySelector('#r6c1').innerText == 4 && 
            document.querySelector('#r5c1').innerText == 2 &&
            document.querySelector('#r5c2').innerText == 4 &&
            document.querySelector('#r4c2').innerText == 2 &&
            document.querySelector('#r4c3').innerText == 4 &&
            document.querySelector('#r3c3').innerText == 2 &&
            document.querySelector('#r3c4').innerText == 4 &&
            document.querySelector('#r2c4').innerText == 2 &&
            document.querySelector('#r2c5').innerText == 4 &&
            document.querySelector('#r6c1').innerText == 4 &&
            document.querySelector('#r1c5').innerText == 2 &&
            document.querySelector('#r1c6').innerText == 4 ){
                alert('you win round 1!')
                mainContainer.classList.add('void')
                secondContainer.classList.remove('void')
                // location.reload();
            } if (
                document.querySelector('#rr6c1').innerText == 4 && 
                document.querySelector('#rr5c1').innerText == 2 &&
                document.querySelector('#rr5c2').innerText == 6 &&
                document.querySelector('#rr5c3').innerText == 4 &&
                document.querySelector('#rr4c3').innerText == 5 &&
                document.querySelector('#rr3c3').innerText == 3 &&
                document.querySelector('#rr3c2').innerText == 6 &&
                document.querySelector('#rr3c1').innerText == 1 &&
                document.querySelector('#rr2c1').innerText == 5 &&
                document.querySelector('#rr1c1').innerText == 2 &&
                document.querySelector('#rr1c2').innerText == 6 &&
                document.querySelector('#rr1c3').innerText == 6 &&
                document.querySelector('#rr1c4').innerText == 6 &&
                document.querySelector('#rr1c5').innerText == 3 &&
                document.querySelector('#rr2c5').innerText == 1 &&
                document.querySelector('#rr2c6').innerText == 4 &&
                document.querySelector('#rr1c6').innerText == 5 ){

                alert('you win round 2!')
                // mainMenu.classList.remove('void');
                secondContainer.classList.add('void')
                thirdContainer.classList.remove('void')
                // location.reload();

            }   if (
                document.querySelector('#r6cc1').innerText == 6 && 
                document.querySelector('#r6cc2').innerText == 6 &&
                document.querySelector('#r6cc3').innerText == 4 &&
                document.querySelector('#r5cc3').innerText == 3 &&
                document.querySelector('#r5cc2').innerText == 6 &&
                document.querySelector('#r5cc1').innerText == 1 &&
                document.querySelector('#r4cc1').innerText == 5 &&
                document.querySelector('#r3cc1').innerText == 5 &&
                document.querySelector('#r2cc1').innerText == 5 &&
                document.querySelector('#r1cc1').innerText == 2 &&
                document.querySelector('#r1cc2').innerText == 6 &&
                document.querySelector('#r1cc3').innerText == 3 &&
                document.querySelector('#r2cc3').innerText == 5 &&
                document.querySelector('#r3cc3').innerText == 5 &&
                document.querySelector('#r4cc3').innerText == 1 &&
                document.querySelector('#r4cc4').innerText == 3 &&
                document.querySelector('#r5cc4').innerText == 5 &&
                document.querySelector('#r6cc4').innerText == 1 &&
                document.querySelector('#r6cc5').innerText == 6 &&
                document.querySelector('#r6cc6').innerText == 4 &&
                document.querySelector('#r5cc6').innerText == 5 &&
                document.querySelector('#r4cc6').innerText == 5 &&
                document.querySelector('#r3cc6').innerText == 3 &&
                document.querySelector('#r3cc5').innerText == 6 &&
                document.querySelector('#r3cc4').innerText == 1 &&
                document.querySelector('#r2cc4').innerText == 2 &&
                document.querySelector('#r2cc5').innerText == 6 &&
                document.querySelector('#r2cc6').innerText == 4 &&
                document.querySelector('#r1cc6').innerText == 5 ){

                alert('you win it ALL!')
                // mainMenu.classList.remove('void');
                // secondContainer.classList.remove('void')
                location.reload();

            }
    

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

// Reloads browser after 2 minutes to send player back to main menu if they dont complete in time
setTimeout(function() {
    window.location.reload(1);
}, 120000);


//  const shuffleCells = () => {
//     cellButton.forEach(cell => {
//         let shuffled = Math.floor(Math.random()*20);
//         cell.style.order = shuffled
//     })
// }

// gameWin = 
    


    // box.innerText = "4"


// EVERYTHING BELOW THIS LINE WAS TAKEN FROM A WEBSITE TO ATTACH A COOL LOOKING TIMER TO MY GAME
// NONE OF THIS CODE IS MY OWN, JUST TWEAKED A LITTLE FOR PLACEMENT/TIMING
// Credit: Mateusz Rybczonec
// https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/



    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;
    
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    
    const TIME_LIMIT = 120;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    
    document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    
    startTimer();
    
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
    
        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }