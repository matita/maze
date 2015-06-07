function recursiveDivisionV(grid, x, y, w, h) {
  x = x || 0;
  y = y || 0;
  h = h || grid.length;
  w = w || grid[0].length;

  if (w < 1)
    return;

  var tempW = Math.floor(w) / 2;
  var wallX = Math.floor(Math.random() * tempW) * 2;
  var holeY = Math.floor(Math.random() * h);

  for (var i = y; i < h; i++) {
    if (i == holeY)
      continue;
    grid[i][wallX] = 1;
  }

  recursiveDivisionH(grid, x, y, wallX - x, h);
  recursiveDivisionH(grid, wallX + 2, y, w - (wallX + 2), h);
}

function recursiveDivisionH(grid, x, y, w, h) {
  x = x || 0;
  y = y || 0;
  h = h || grid.length;
  w = w || grid[0].length;

  if (h < 1)
    return;

  var tempH = Math.floor(h) / 2;
  var wallY = Math.floor(Math.random() * tempH) * 2;
  var holeX = Math.floor(Math.random() * w);

  for (var i = x; i < w; i++) {
    if (i == holeX)
      continue;
    grid[wallY][i] = 1;
  }

  recursiveDivisionV(grid, x, y, w, wallY - h);
  recursiveDivisionV(grid, x, wallY + 2, w, h - (wallY + 2));
}



module.exports = recursiveDivisionV;