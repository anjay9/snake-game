const resetApple = (elems, grid) => {

  let spaceFound = false;

  const tryFindSpace = () => {
    const xApl = Math.floor(Math.random() * (grid - 1));
    const yApl = Math.floor(Math.random() * (grid - 1));
    for (i=0; i<elems.snake.length; i++){
      if (elems.snake[i].xPos === xApl && elems.snake[i].yPos === yApl) return false;
    }
    return {x: xApl, y: yApl};
  }

  let loop = 0;
  while (spaceFound === false){
    loop++;
    const returned = tryFindSpace();
    if (returned !== false){
      elems.apple.xPos = returned.x;
      elems.apple.yPos = returned.y;
      spaceFound = true;
    }
  }

}
