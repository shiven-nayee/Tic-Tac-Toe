var canvas = document.querySelector('#tic-tac-toe');
var context = canvas.getContext('2d');
var canvasSize = 500/3; // 166 the approximate size of each columm

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
    context.moveTo(canvasSize * i, 5);
    context.lineTo(canvasSize * i, 495)
  }

  /**
   * This draws the vertical lines
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(0, canvasSize * i);s
    context.lineTo(495, canvasSize * i);
  }

  /**
   * Draws the lines on the DOM
   */
  context.stroke();
};

const addPiece = (mouseCoordinates) => {
  let xCoordinate;
  let yCoordinate;

  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      var cavasX = x * canvasSize;
      var canvasY = y * canvasSize;
      var mouseX = mouseCoordinates.x;
      var mouseY = mouseCoordinates.y;

      /**
       * Checks if mouse coordinate are within the current section of the canvas
       */
      if((mouseX >= canvasX && mouseX <= canvasX + cavasSize) &&
        (mouseY >= canvasY && mouseY <= canvasY + cavasSize)) {

      }
    }
  }
}

const drawO = (x, y) => {

}

const drawX = (x, y) => {

}
