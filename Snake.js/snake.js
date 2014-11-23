var UNIT = 16;
var snake =
[
  makePoint(100,100),
  makePoint(100 + UNIT, 100),
  makePoint(100 + UNIT*2, 100),
  makePoint(100 + UNIT*3, 100),
  makePoint(100 + UNIT*4, 100),
  makePoint(100 + UNIT*5, 100)
];

function makePoint(x,y)
{
  return { x: x, y: y };
}

function makeDiv(p)
{
  var $div = $('<div>').css(
  {
    top: p.y,
    left: p.x,
    height: UNIT,
    width: UNIT
  }).addClass('unit');

  return $div;
}

function renderDiv($div)
{
  $('body').append($div);
}

function render(points)
{
  points.map(makeDiv).map(renderDiv);
}

function move(p)
{
  return makePoint(p.x + UNIT, p.y);
}

function moveSnake(points)
{
  return points.map(move);
}

function clearScreen()
{
  $('body').html('');
}

function gameLoop()
{
  clearScreen();
  snake = moveSnake(snake);
  render(snake);
  setTimeout(gameLoop, 64);
}