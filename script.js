// The objects
const game = {
    switchToChoices: function(){
        btnChoiceX.disabled = false;
        btnChoiceO.disabled = false;
        btnChoiceX.classList.toggle('choiceStage');
        btnChoiceO.classList.toggle('choiceStage');
    },
    switchToBoard: function(){
        btnChoiceX.disabled = true;
        btnChoiceO.disabled = true;
        btnChoiceX.classList.toggle('choiceStage');
        btnChoiceO.classList.toggle('choiceStage');
        cellNodeList.forEach((cell) => {
            cell.classList.toggle('choiceStage')});
    },
}

const player = {
    figure: null,
};

const btnChoiceX = document.getElementById('choiceX');
const btnChoiceO = document.getElementById('choiceO');

const cellNodeList = document.querySelectorAll('.cell');
// Adds on-click func. to each cell to write figs
cellNodeList.forEach((cell) => {
    cell.addEventListener('click', function(){
            this.textContent = player.figure;
        }
)});

const choiceButtons = document.querySelectorAll('button');
// Adds on-click func. to pick X or O, turn off buttons
// Then turn on the board
choiceButtons.forEach((button) => {
    button.addEventListener('click', function(e){
        player.figure = this.textContent;
        game.switchToBoard();
    })
})








