var canvas = document.querySelector('#tic-tac-toe');
var context = canvas.getContext('2d');

var drawBoard = () => {
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
    context.moveTo(166 * i, 5);
    context.lineTo(166 * i, 495)
  }

  /**
   * This draws the vertical lines
   */
  for (let i = 1; i <= 2; i++) {
    context.moveTo(0, 166 * i);s
    context.lineTo(495, 166 * i);
  }

  /**
   * Draws the lines on the DOM
   */
  context.stroke();
};
