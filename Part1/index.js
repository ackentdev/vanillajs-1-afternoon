console.log("never turn your back on the emperor");

var board = [];

function play(clickedId) {
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player');
    if (playerSpan.innerText === 'X') {
        clickedElement.innerText = 'X';
        playerSpan.innerText = 'O';
        board[clickedId] = 'X';
    } else {
        clickedElement.innerText = 'O';
        playerSpan.innerText = 'X';
        board[clickedId] = 'O';
    }
}

//  if board[0,1,2]
//          [3,4,5]
//          [6,7,8]
//          [0,3,6]
//          [1,4,7]
//          [2,5,7]
//          [0,4,8]
//          [2,4,6]
//  = X, then he/she is the winner, if O, then he/she wins
// if all of board has truthy statements, then cat's game alert
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];
const boardFull = true;

function winner() {
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(topLeft, ' is the winner!');
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(middleLeft, ' is the winner!');
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(bottomLeft, ' is the winner!');
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(topLeft, ' is the winner!');
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(topCenter, ' is the winner!');
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(topRight, ' is the winner!');
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(topLeft, ' is the winner!');
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(topRight, ' is the winner!');
    } else {
        for (i=0; i<board.length; i++) {
            if (board[i] === undefined) {
                boardFull === false;
            }
        }
    } if (boardFull === true) {
        alert("MEOWZA!");
    }
}

