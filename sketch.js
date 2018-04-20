function setup() {
  createCanvas(windowWidth, windowHeight)
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {
  micLevel = mic.getLevel();
  adjustedMicLevel = micLevel * 2000;
  adjustedMicLevel2 = micLevel * 4567;
  adjustedMicLevel12 = micLevel * 2563;
  adjustedMicLevel13 = micLevel * 3627;
fill (0);
strokeWeight(adjustedMicLevel2);
stroke(157,103,adjustedMicLevel13);
fill(adjustedMicLevel2, adjustedMicLevel13, adjustedMicLevel2);
ellipse(40,350, adjustedMicLevel12, adjustedMicLevel2);
fill(adjustedMicLevel13, adjustedMicLevel12, adjustedMicLevel13)
ellipse(50,130,adjustedMicLevel2, adjustedMicLevel)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}