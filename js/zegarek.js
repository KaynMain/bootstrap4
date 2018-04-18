/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var MARGIN = 35,
    RADIUS = canvasElem.widght/2 - MARGIN;

function drawCircle() {
  ctx.beginPath();
  ctx.arc(canvasElem.width/2, canvasElem.height/2,
          RADIUS, 0, 02*Math,PI, true);
  ctx.stroke();
}

function drawCenter() {
  ctx.beginPath();
  ctx.arc(canvasElem.width/2, canvasElem.height/2,
          5, 0, 02*Math,PI, true);
  ctx.fill();
}

//wywołanie funkcji
drawCircle();
drawCenter();
