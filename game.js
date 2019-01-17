const startGame = () => {
  const canvas = document.getElementById("snake-game-canvas");
  const context = canvas.getContext("2d");
  const tileSize = 30;
  const gridSize = 10;
  canvas.height = tileSize * gridSize;
  canvas.width = tileSize * gridSize;
  const elements = {
    snake: [{style:"green", xPos:2, yPos:4, direction:"top", xPrePos:2, yPrePos:5}],
    apple: {style:"red", xPos:4, yPos:4}
  }

  const gameLoop = setInterval(function(){
    moveSnake(elements, gridSize, gameLoop);
    drawCanvas(context, canvas);
    drawElems(context, tileSize, elements);
  } ,1000/10);

  document.addEventListener("keydown", function(){keyPush(event, elements.snake[0])} );

}

window.onload = startGame;
