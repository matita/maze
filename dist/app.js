(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var gridMaker = require('./util/grid.js');

console.log(gridMaker(10, 10));
},{"./util/grid.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
