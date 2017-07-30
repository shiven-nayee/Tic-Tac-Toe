var canvas = document.querySelector('#tic-tac-toe');
var context = canvas.getContext('2d');
var columnSize = 500 / 3; // 166 the approximate size of each columm
var playerTurn = 'o';

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
      var canvasX = x * columnSize;
      var canvasY = y * columnSize;
      var mouseX = mouseCoordinates.x;
      var mouseY = mouseCoordinates.y;

      /**
       * Checks if mouse coordinate are within the current section of the canvas
       */
      if ((mouseX >= canvasX && mouseX <= canvasX + columnSize) &&
        (mouseY >= canvasY && mouseY <= canvasY + columnSize)) {
        if (playerTurn === 'x') {
          drawX(canvasX, canvasY);
          playerTurn = 'o';
        } else {
          drawO(canvasX, canvasY);
          playerTurn = 'x';
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
