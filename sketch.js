function setup() {
  createCanvas(800, 600);
  
  // Set here the values that are not changing all over the sketch
  strokeWeight(2);
}

function draw() {
  colorMode(RGB);
  background(197,171,216);
  
  // Neck my robot has no neck

  // Antennas
  stroke(138,139,140);
  line(360,130,340,110);
  line(440,130,460,110);
  noStroke();
  fill(138,139,140);
  ellipse(335,105,15,15);
  ellipse(465,105,15,15);

  // Body
  fill(96,192,182);
  rect(300,200,200,200);
  fill(255,0,0);
  rect(320,220,40,40);
  fill(255,255,255);
  rect(320,280,40,40);
  rect(320,340,40,40);
  rect(380,220,40,40);
  rect(380,280,40,40);
  rect(380,340,40,40);
  rect(440,220,40,40);
  rect(440,280,40,40);
  fill(96,192,182);
  rect(440,340,40,40);
  
  // Arms
  fill(68,49,85);
  ellipse(275,230,50,50);
  ellipse(245,270,50,50);
  ellipse(230,317,50,50);
  ellipse(525,230,50,50);
  ellipse(555,270,50,50);
  ellipse(570,317,50,50);
  fill(223,110,129);
  arc(220,366,40,50,radians(185),radians(5));
  arc(580,366,40,50,radians(175),radians(355));
  
  // Legs
  fill(53,85,126);
  rect(345,400,30,90);
  rect(425,400,30,90);
  arc(345,475,90,30,HALF_PI,PI+HALF_PI);
  arc(455,475,90,30,PI+HALF_PI,HALF_PI);
  
  // Head
  fill(248,206,216);
  arc(400,200,150,170,PI,TWO_PI);
  
  // Eyes
  fill(255,255,255);
  ellipse(375,160,40,40);
  ellipse(425,160,40,40);
  fill(0,0,0);
  ellipse(((mouseX/2800)*60+375),((mouseY/2600)*60+160),10,10);
  ellipse(((mouseX/2800)*60+425),((mouseY/2600)*60+160),10,10);
  
  // Mouth
  strokeWeight(5);
  stroke(138,139,140);
  line(390,190,410,190);

}

