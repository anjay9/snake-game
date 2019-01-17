const extendSnake = (elems) => {
  const lastSnakePiece = elems.snake[elems.snake.length - 1];
  elems.snake.push(
    {style: "darkGreen",
    xPos: lastSnakePiece.xPrePos,
    yPos: lastSnakePiece.yPrePos}
  );
}
