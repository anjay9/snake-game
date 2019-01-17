const moveSnake = (elems, grid) => {

  let head = elems.snake[0];

  const xTempForPrePos = head.xPos;
  const yTempForPrePos = head.yPos;

  if (head.direction === "right") {
    head.xPos += 1;
    if (head.xPos >= grid) head.xPos = 0;
  }

  else if (head.direction === "left") {
    head.xPos -= 1;
    if (head.xPos < 0) head.xPos = grid - 1;
  }

  else if (head.direction === "top") {
    head.yPos -= 1;
    if (head.yPos < 0) head.yPos = grid - 1;
  }

  else if (head.direction === "bottom") {
    head.yPos += 1;
    if (head.yPos >= grid) head.yPos = 0;
  }

  head.xPrePos = xTempForPrePos;
  head.yPrePos = yTempForPrePos;

  for (i=1; i<elems.snake.length; i++){
    const xTemp = elems.snake[i].xPos;
    const yTemp = elems.snake[i].yPos;
    elems.snake[i].xPos = elems.snake[i-1].xPrePos;
    elems.snake[i].yPos = elems.snake[i-1].yPrePos;
    elems.snake[i].xPrePos = xTemp;
    elems.snake[i].yPrePos = yTemp;
  }

  // Check is an apple has been found
  for (key in elems){
    if (key.includes("apple")){
      if (head.xPos === elems[key].xPos && head.yPos === elems[key].yPos){
        extendSnake(elems);
        resetApple(elems, grid);
      }
    }
  }

}
