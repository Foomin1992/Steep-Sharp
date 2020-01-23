
function setup() {
 createCanvas(600,600);
 background(0);
}

function draw() {
background(0);
 
stroke(255);
noFill();
 beginShape();
  triangle(100,200,200,100,100,100)
endShape();
beginShape();
  triangle(130,230,230,130,130,130)
endShape();
beginShape();
  triangle(500,400,400,500,500,500)
endShape();
beginShape();
  triangle(470,370,370,470,470,470)
endShape();
beginShape();
vertex(410,410);
bezierVertex(80, mouseX, 380, 75, 75, 75);
vertex(410,410)
bezierVertex(160, mouseX, 380, 150, 150, 150);
vertex(410,410)
bezierVertex(240, mouseX, 380, 225, 225, 225);
vertex(410,410)
bezierVertex(320, mouseX, 380, 300, 300, 300);
endShape();
}