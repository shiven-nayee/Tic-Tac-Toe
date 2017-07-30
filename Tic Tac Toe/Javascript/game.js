var canvas = document.querySelector('#tic-tac-toe');
var context = canvas.getContext('2d');
var columnSize = 500/3; // 166 the approximate size of each columm
var playerTurn = 'o';

const drawBoard = () => {
  /**
   * Begins the drawing path
   * strokeStyle changes the color of the lines
   * lineWidth is the thickness of the line
   * lineCap defines how the end of the lines look
   */
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.lineCap = 'round';

  /**
   * This draws the vertical lines
   * moveTo(beginning X, beginning Y)
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(columnSize * i, 5);
    context.lineTo(columnSize * i, 495)
  }

  /**
   * This draws the vertical lines
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(0, columnSize * i);
    context.lineTo(495, columnSize * i);
  }

  /**
   * Draws the lines on the DOM
   */
  context.stroke();
};

const addPiece = (mouseCoordinates) => {
  for(var x = 0; x < 3; x++) {
    for(var y = 0; y < 3; y++) {
      var canvasX = x * columnSize;
      var canvasY = y * columnSize;
      var mouseX = mouseCoordinates.x;
      var mouseY = mouseCoordinates.y;

      /**
       * Checks if mouse coordinate are within the current section of the canvas
       */
      if((mouseX >= canvasX && mouseX <= canvasX + columnSize) &&
        (mouseY >= canvasY && mouseY <= canvasY + columnSize)) {
        if(playerTurn === 'x') {
          drawX(canvasX, canvasY);
        } else {
          drawO(canvasX, canvasY);
        }
      }
    }
  }
}

const getMouseCoordinates = (event) => {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const drawO = (x, y) => {
  let halfColumnSize = columnSize/2;
  let centerX = x + halfColumnSize;
  let centerY = y + halfColumnSize;
  let radius = 66;
  let start = 0 * Math.PI; // The point where the circle begins
  let end = 2 * Math.PI;

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 10;

  context.beginPath();
  context.arc(centerX, centerY, radius, start, end);
  context.stroke();
}

const drawX = (x, y) => {

}

drawBoard();

canvas.addEventListener('mouseup', function(event) {
  var mousePos = getMouseCoordinates(event);
  addPiece(mousePos);
});
