var gridMaker = require('./util/grid.js');
var mazer = require('./util/maze-generator.js')

var grid = gridMaker(31, 31);
mazer(grid);
drawGrid(grid);
console.log(grid);



function drawGrid(grid) {
  var html = grid.map(function(row) {
    return row.join(' ');
  }).join('<br>');

  document.getElementById('canvas').innerHTML = html;
}