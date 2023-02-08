
function toggleCells(){
    cellNodeList.forEach((cell) => {
        cell.classList.toggle('turnedOff');
        cell.classList.toggle('turnedOn');;
    });
}
function toggleButtons(){
    if (btnChoiceX.disabled === false) {
        btnChoiceX.disabled = true;
        btnChoiceO.disabled = true; // If they're on, turns them off
        btnChoiceX.classList.remove('turnedOn');
        btnChoiceO.classList.remove('turnedOn');
        btnChoiceX.classList.add('turnedOff');
        btnChoiceO.classList.add('turnedOff');
    } else {
        btnChoiceX.disabled = false;
        btnChoiceO.disabled = false; // Else if theyre off, turns them on
        btnChoiceX.classList.remove('turnedOff');
        btnChoiceO.classList.remove('turnedOff');
        btnChoiceX.classList.add('turnedOn');
        btnChoiceO.classList.add('turnedOn');
    }
}

const endScreen = document.getElementById('endScreen');
function toggleOverlay(){
    endScreen.classList.toggle('hidden');
}
function clearCells(){
    cellNodeList.forEach((cell) => { // Clear the cells
        cell.textContent = " ";
    });
}

const player = {
    figure: null,
    movesTaken: 0,
    xWins: 0,
    oWins: 0,
};


// CELL CLICK FUNCTIONALITY
const cellNodeList = document.querySelectorAll('.cell');
cellNodeList.forEach((cell) => {
    cell.addEventListener('click', function(){

            this.textContent = player.figure;
            swapFigure();

            if (scanForXWin()){
                gameOver();
                xWins(); 
            }

            if (scanForOWin()){
                gameOver();
                oWins();
            }

            player.movesTaken ++;
            if (player.movesTaken === 9){ 
                gameOver();
                theDraw();
            }
        }
)});

// CHOICE BUTTON FUNCTIONALITY
const btnChoiceX = document.getElementById('choiceX');
const btnChoiceO = document.getElementById('choiceO');
const choiceButtons = document.querySelectorAll('.btnChoice');
choiceButtons.forEach((button) => {
    button.addEventListener('click', function(e){
        player.figure = this.textContent;
        toggleButtons();
        toggleCells();
    })
})

// CONTINUE BUTTON FUNCTIONALITY
const btnContinue = document.getElementById('btnContinue');
btnContinue.addEventListener('click', () =>{
    player.figure = " ";
    player.movesTaken = 0;
    toggleOverlay();
});


// RESTART BUTTON FUNCTIONALITY
const btnRestart = document.getElementById('btnRestart');
btnRestart.addEventListener('click', ()=>{
    player.xWins = 0;
    player.oWins = 0;
    player.figure = " ";
    player.movesTaken = 0;
    toggleOverlay();
});



const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');



const firstRow = [cell1, cell2, cell3];
const secondRow = [cell4, cell5, cell6];
const thirdRow = [cell7, cell8, cell9];
const firstCol = [cell1, cell4, cell7];
const secondCol = [cell2, cell5, cell8];
const thirdCol = [cell3, cell6, cell9];
const firstDiag = [cell1, cell5, cell9];
const secondDiag = [cell3, cell5, cell7];
const fullArr = [cell1, cell2, cell3, cell4, cell5,
                 cell6, cell7, cell8, cell9];



function scanForXWin(){
    if ((firstRow[0].textContent === "X" &&
        firstRow[1].textContent === "X" &&
        firstRow[2].textContent === "X") ||
        (secondRow[0].textContent === "X" &&
        secondRow[1].textContent === "X" &&
        secondRow[2].textContent === "X") ||
        (thirdRow[0].textContent === "X" &&
        thirdRow[1].textContent === "X" &&
        thirdRow[2].textContent === "X") ||
        (firstCol[0].textContent === "X" &&
        firstCol[1].textContent === "X" &&
        firstCol[2].textContent === "X") ||
        (secondCol[0].textContent === "X" &&
        secondCol[1].textContent === "X" &&
        secondCol[2].textContent === "X") ||
        (thirdCol[0].textContent === "X" &&
        thirdCol[1].textContent === "X" &&
        thirdCol[2].textContent === "X") ||
        (firstDiag[0].textContent === "X" &&
        firstDiag[1].textContent === "X" &&
        firstDiag[2].textContent === "X") ||
        (secondDiag[0].textContent === "X" &&
        secondDiag[1].textContent === "X" &&
        secondDiag[2].textContent === "X")) {
            return true;
        }      
}
function scanForOWin(){
    if ((firstRow[0].textContent === "O" &&
        firstRow[1].textContent === "O" &&
        firstRow[2].textContent === "O") ||
        (secondRow[0].textContent === "O" &&
        secondRow[1].textContent === "O" &&
        secondRow[2].textContent === "O") ||
        (thirdRow[0].textContent === "O" &&
        thirdRow[1].textContent === "O" &&
        thirdRow[2].textContent === "O") ||
        (firstCol[0].textContent === "O" &&
        firstCol[1].textContent === "O" &&
        firstCol[2].textContent === "O") ||
        (secondCol[0].textContent === "O" &&
        secondCol[1].textContent === "O" &&
        secondCol[2].textContent === "O") ||
        (thirdCol[0].textContent === "O" &&
        thirdCol[1].textContent === "O" &&
        thirdCol[2].textContent === "O") ||
        (firstDiag[0].textContent === "O" &&
        firstDiag[1].textContent === "O" &&
        firstDiag[2].textContent === "O") ||
        (secondDiag[0].textContent === "O" &&
        secondDiag[1].textContent === "O" &&
        secondDiag[2].textContent === "O")) {
            return true;
        }    
}
function swapFigure(){
    if (player.figure === "X"){
        player.figure = "O"
    } else {
        player.figure = "X";
    }
}
function gameOver(){
    toggleCells();
    clearCells();
    toggleButtons();                 
    toggleOverlay();                 
}


function xWins(){
    player.xWins ++;
    playerWins.textContent = "X wins!";
    currentScore.textContent = `${player.xWins} | ${player.oWins}`;
    
}
function oWins(){
    player.oWins ++;
    playerWins.textContent = "O wins!";
    currentScore.textContent = `${player.xWins} | ${player.oWins}`; 
}
function theDraw(){
    playerWins.textContent = "Draw!";
    currentScore.textContent = `${player.xWins} | ${player.oWins}`;
}

function continueButton(){
    // goes into choice phase
    // turns off the overlay
}
function restartButton(){
    //goes into choice phase
    //turns off the overlay
    // resets movesTaken
    //resets player figure
}








