(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./util/grid.js":2,"./util/maze-generator.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
