module.exports = function(w, h) {
  var grid = [];
  for (var y = 0; y < h; y++) {
    var row = [];
    grid.push(row);
    for (var x = 0; x < w; x++)
      row.push(0);
  }
  return grid;
}