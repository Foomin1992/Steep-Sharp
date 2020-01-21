
function setup() {
 createCanvas(600,600);
 background(0);
}

function draw() {
background(0);
 
stroke(255);
noFill();
 beginShape();
  vertex(118, 300);
  vertex(500,300);
  quadraticVertex(433, 17, 373, 322);
  bezierVertex(141, 104, 266, 201, 122, 299);
endShape();
}