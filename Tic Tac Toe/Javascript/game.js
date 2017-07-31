var span = document.querySelector('span');
var scoreX = document.querySelector('#playerX');
var scoreY = document.querySelector('#playerY');
var canvas = document.querySelector('#tic-tac-toe');
var context = canvas.getContext('2d');
var columnSize = 500 / 3; // 166 the approximate size of each columm
var playerTurn = 'o';
var winner = 10;
var arr = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

const changePlayerToX = () => {
  span.textContent = 'X';
  span.style.color = 'blue';
  playerTurn = 'x';
}

const changePlayerToO = () => {
  span.textContent = 'O';
  span.style.color = 'red';
  playerTurn = 'o';
}

const checkDiag = () => {
  // Needs to be made everytime in order to be updated;
  let p1 = arr[0][0];
  let p2 = arr[0][1];
  let p3 = arr[0][2];
  let p4 = arr[1][0];
  let p5 = arr[1][1];
  let p6 = arr[1][2];
  let p7 = arr[2][0];
  let p8 = arr[2][1];
  let p9 = arr[2][2];

// Checks in any diagnols have won yet, sets winner to winning piece
  if (p1 === p5 && p1 === p9) {
    winner = p1;
    return true;
  } else if (p3 === p5 && p3 === p7) {
    winner = p3;
    return true;
  } else {
    return false;
  }
}

// Checks in any vertical have won yet, sets winner to winning piece
checkVertical = () => {
  // Needs to be made everytime in order to be updated;
  let p1 = arr[0][0];
  let p2 = arr[0][1];
  let p3 = arr[0][2];
  let p4 = arr[1][0];
  let p5 = arr[1][1];
  let p6 = arr[1][2];
  let p7 = arr[2][0];
  let p8 = arr[2][1];
  let p9 = arr[2][2];

  if (p1 === p4 && p1 === p7) {
    winner = p1;
    return true;
  } else if (p2 === p5 && p2 === p8) {
    winner = p2;
    return true;
  } else if (p3 === p6 && p3 === p9) {
    winner = p3;
    return true;
  } else {
    return false;
  };
}

// Checks in any horizontal have won yet, sets winner to winning piece
checkHorizontal = () => {
  // Needs to be made everytime in order to be updated;
  let p1 = arr[0][0];
  let p2 = arr[0][1];
  let p3 = arr[0][2];
  let p4 = arr[1][0];
  let p5 = arr[1][1];
  let p6 = arr[1][2];
  let p7 = arr[2][0];
  let p8 = arr[2][1];
  let p9 = arr[2][2];

  if (p1 === p2 && p1 === p3) {
    winner = p1;
    return true;
  } else if (p4 === p5 && p4 === p6) {
    winner = p4;
    return true;
  } else if (p7 === p8 && p7 === p9) {
    winner = p7;
    return true;
  } else {
    return false;
  }
}

const checkForWin = () => {
  if (checkDiag() || checkHorizontal() || checkVertical()) {
    if (winner === 1) {
      alert('Player X Wins!');
    } else {
      alert('Player O Wins!');
    }
  } else {
    console.log('not yet');
  }
}

const choosePlayer = () => {
  if (confirm('Change player 1 piece to X?') == true) {
    changePlayerToX();
    console.log('ok');
  } else {
    changePlayerToO();
    console.log('cancel');
  }
}

const drawBoard = () => {
  /**
   * Begins the drawing path
   * strokeStyle changes the color of the lines
   * lineWidth is the thickness of the line
   * lineCap defines how the end of the lines look
   */
  context.beginPath();
  context.strokeStyle = 'darkgrey';
  context.lineWidth = 10;
  context.lineCap = 'round';

  /**
   * This draws the vertical lines
   * moveTo(beginning X, beginning Y)
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(columnSize * i, 5); // Point where line begins
    context.lineTo(columnSize * i, 495); // Point where line ends
  }

  /**
   * This draws the vertical lines
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(5, columnSize * i); // Point where line begins
    context.lineTo(495, columnSize * i); // Point where line ends
  }

  /**
   * Draws the lines on the DOM
   */
  context.stroke();

  choosePlayer();
};

/**
 * @param  {object of mouse coordinates}
 * loops through x and for each x loops through y
 * the script looks for which rectangle was clicked by comparing the
 * mouse coordinates to dimensions of all the rectangles
 */
const addPiece = (mouseCoordinates) => {
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      var canvasX = x * columnSize; //0, 1, 2
      var canvasY = y * columnSize; //0, 1, 2
      var mouseX = mouseCoordinates.x;
      var mouseY = mouseCoordinates.y;

      /**
       * Checks if mouse coordinate are within the current section of the canvas
       */
      if ((mouseX >= canvasX && mouseX <= canvasX + columnSize) &&
        (mouseY >= canvasY && mouseY <= canvasY + columnSize)) {
        if (playerTurn === 'x') {
          drawX(canvasX, canvasY);
          arr[y][x] = 1;
          checkForWin();
          // console.log(arr);
          // console.log(arr[y][x]);
          // console.log('X: ' + canvasX);
          // console.log('Y: ' + canvasY);
        } else {
          drawO(canvasX, canvasY);
          arr[y][x] = 0;
          checkForWin();
          // console.log(arr);
          // console.log(arr[y][x]);
          // console.log('X: ' + canvasX);
          // console.log('Y: ' + canvasY);
        }
      }
    }
  }
}

/**
 * @param  {event}
 * @return {Obj including x and y coordinates of mouse}
 * rect.left and rect.top subtract pixels to show the general position of the rectangle with more precision
 */
const getMouseCoordinates = (event) => {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

/**
 * @param  {X and Y Coordinate}
 * draws the O
 * gets the middle of the rectangle in the canvas
 */
const drawO = (x, y) => {
  let halfColumnSize = columnSize / 2;
  let centerX = x + halfColumnSize;
  let centerY = y + halfColumnSize;
  let radius = 50;
  let start = 0 * Math.PI; // The point where the circle begins
  let end = 2 * Math.PI; // The point where the circle ends

  /**
   * Styles the line, begins to draw the arc clockwise
   * arc(originX, originY, radius, startingRads, endingRadians, clockwise/counter)
   */
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.beginPath();
  context.arc(centerX, centerY, radius, start, end);
  context.stroke();

  // checkForWin();
  changePlayerToX();
}

const drawX = (x, y) => {
  context.strokeStyle = 'blue';
  context.lineWidth = 10;

  context.beginPath();

  // Draws first line
  context.moveTo(x + 50, y + 50);
  context.lineTo(x + columnSize - 50, y + columnSize - 50);

  // Draws the second line
  context.moveTo(x + 50, y + columnSize - 50);
  context.lineTo(x + columnSize - 50, y + 50);
  context.stroke();

  // checkForWin();
  changePlayerToO();
}

drawBoard();

/**
 * listens for 'mouseup' event
 * takes mouse coordinates and passes them to 'addPiece'
 */
canvas.addEventListener('mouseup', function(event) {
  var mousePos = getMouseCoordinates(event);
  addPiece(mousePos);
});
