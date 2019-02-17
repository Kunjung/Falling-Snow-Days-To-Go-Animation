// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];

function preload() {
  font = loadFont('LuckiestGuy-Regular.ttf');
  // font = loadFont('Caveat-Bold.ttf');
}

var picNumber;
var gameOver = false;

function setup() {
  createCanvas(1200, 580);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);
  picNumber = 10000;

  var points = font.textToPoints('1   day to go', 60, 510, 195, {
    sampleFactor: 0.2
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  // background(125, 190, 255);
  //background(0, 0, 10);
  background(80, 214, 255);
  noStroke();
  fill(255, 255, 255);
  ellipse(width * 1/5, height/7, 50, 50);

  fill(120, 192, 45);
  noStroke();
  rect(0, height * 1.7/3, width, height);

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

  if (frameCount >= 130) {
  	gameOver = true;
  }

  console.log(frameCount);

// // Save Pictures

 //  if (frameCount % 1 == 0) {
	// saveCanvas(picNumber.toString(),  "png"); 
	// picNumber += 1;
 //  }
 //  if (gameOver) {
 //    saveCanvas(picNumber.toString(),  "png");
	// for (var i = 0; i < 20; i++) {
	//   picNumber += 1;
	//   saveCanvas(picNumber.toString(),  "png");
	// }
	// noLoop(); // end the loop
 //  }


}
