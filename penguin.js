readyPenguinAttack = function() {
  if (isMobileWidthOrLess()) return false; // Die if mobile

  $('.site-logo').on('click', function(e) {
    e.preventDefault();
    resetPenguinAttack();
    runPenguinAttack();
  });
}

// Animation for penguin attack
runPenguinAttack = function() {

  // lining up the army of penguins:

  // Please bear in mind that if you are using a different image, you may need to
  // change the coordinates below
  var normalPosition = {
    transform: 'none',
    left: '-150px',
    top: '0',
    leftanimate: '+=150px',
    leftanimateend: '-=250px',
    topanimate: 'none',
    topanimateend: 'none'};

  var lowerPosition = {
    transform: 'none',
    left:'-150px',
    bottom: '400px',
    leftanimate: '+=150px',
    leftanimateend: '-=250px',
    topanimate: 'none',
    topanimateend: 'none'};

  var rotatedSide ={
    transform: 'rotate(90deg)',
    left: '-500px',
    top: '0',
    leftanimate: '+=450px',
    leftanimateend: '-=450px',
    topanimate: 'none',
    topanimateend: 'none'};

  var rotatedTop = {
    transform: 'rotate(180deg)',
    left: '200px',
    top: '-300px',
    leftanimate: '200px',
    leftanimateend: '200px',
    topanimate: '+=250px',
    topanimateend: '-=500px'};

  var middleTop = {
    transform: 'rotate(180deg)',
    left: '800px',
    top: '-300px',
    leftanimate: '800px',
    leftanimateend: '800px',
    topanimate: '+=250px',
    topanimateend: '-=500px'};

  // choosing tributes from the army of penguins
  var penguin = $('.penguin-attack');
  var penguins = [middleTop, rotatedTop, rotatedSide, lowerPosition, normalPosition];
  var random_penguin = penguins[Math.floor(Math.random() * penguins.length)];
  console.log(random_penguin)
  // sending the penguin off to do its mission
  penguin.css({
      'display': 'initial',
      'transform': random_penguin.transform,
      'left': random_penguin.left,
      'top': random_penguin.top
    });
  penguin.animate({
    left: random_penguin.leftanimate,
    top: random_penguin.topanimate
  }, 1000);
  penguin.animate({
    left: random_penguin.leftanimateend,
    top: random_penguin.topanimateend
  }, 250);
};

// Reset animation for penguin attack
resetPenguinAttack = function() {
  var penguin = $('.penguin-attack');
  penguin.stop(true, true);
  penguin.css({
    'display': 'none',
    'top': 0,
    'left': 0
  });
}

isMobileWidthOrLess = function() {
  var test = $(window).width() <= 460 ? true : false;
  return test;
}

readyPenguinAttack();


