const keyPush = (event, head) => {
  const dir = head.direction;
  switch(event.keyCode){

    case 37: // Left
      if (dir === "top" || dir === "bottom"){
        if (head.xPrePos !== head.xPos - 1) head.direction = "left";
      }
      break;

    case 38: // Bottom
      if (dir === "left" || dir === "right"){
        if (head.yPrePos !== head.yPos + 1) head.direction = "top";
      }
      break;

    case 39: // Right
      if (dir === "top" || dir === "bottom"){
        if (head.xPrePos !== head.xPos + 1) head.direction = "right";
      }
      break;

    case 40: // Top
      if (dir === "left" || dir === "right"){
        if (head.yPrePos !== head.yPos - 1) head.direction = "bottom";
      }
      break;

  }
}
