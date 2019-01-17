const drawCanvas = (context, canvas) => {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

const drawElems = (context, tileSize, elements) => {
  for (key in elements){
    const elem = elements[key];
    if (elem.constructor === Array){
      for (i=0; i<elem.length; i++){
        context.fillStyle = elem[i].style;
        context.fillRect(elem[i].xPos*tileSize, elem[i].yPos*tileSize, tileSize, tileSize);
      }
    } else {
      context.fillStyle = elem.style;
      context.fillRect(elem.xPos*tileSize, elem.yPos*tileSize, tileSize, tileSize);
    }
  }
}
