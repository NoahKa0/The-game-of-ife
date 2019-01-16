/*
  author: Noah Kastelein
*/

var auto = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function nextGenAuto(width, height) {
  auto = !auto;
  while(auto) {
    nextGen(width, height);
    await sleep(70);
  }
}

function clickEvent(x, y) {
  document.getElementById(("x"+x+"y"+y)).classList.toggle("alive");
}

function alive(x, y) {
  return document.getElementById(("x"+x+"y"+y)).classList.contains("alive");
}

function isAlive(width, height, x, y) {
  if(x >= width) x -= width;
  if(y >= height) y -= height;
  if(x < 0) x += width;
  if(y < 0) y += height;
  return alive(x, y);
}

function getNeighbors(width, height, x, y) {
  var ret = 0;
  if(isAlive(width, height, x-1, y-1)) ret++;
  if(isAlive(width, height, x, y-1)) ret++;
  if(isAlive(width, height, x+1, y-1)) ret++;

  if(isAlive(width, height, x-1, y)) ret++;
  if(isAlive(width, height, x+1, y)) ret++;

  if(isAlive(width, height, x-1, y+1)) ret++;
  if(isAlive(width, height, x, y+1)) ret++;
  if(isAlive(width, height, x+1, y+1)) ret++;
  return ret;
}

function nextGen(width, height) {
  var ng = new Array(width);
  for (var i = 0; i < width; i++) {
    ng[i] = new Array(height);
  }
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
      var neighbors = getNeighbors(width, height, x, y);
      console.log(("w"+width+"h"+height)+("x"+x+"y"+y));
      ng[x][y] = false;
      if(neighbors == 3) ng[x][y] = true;
      if(neighbors == 2 && alive(x, y)) ng[x][y] = true;
    }
  }
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
      if(ng[x][y]) {
        document.getElementById(("x"+x+"y"+y)).classList.add("alive");
      } else {
        document.getElementById(("x"+x+"y"+y)).classList.remove("alive");
      }
    }
  }
}