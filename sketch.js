
let xMax = 400;
let yMax = 400;
let xdog = xMax/2
let ydog = yMax/2

function setup() {
  createCanvas(400, 400);
  console.log('p5.js version:', p5.VERSION);
}

function draw() {
  background (173, 216, 230);

  push()
  
  //corpo cane
  fill(91,60,29);
  stroke(91,60,29);
  rectMode(CENTER);
  rect(xdog, ydog, 100,35);

  //testa
  fill(91,60,29);
  stroke(91,60,29);
  rect(xdog+52, ydog/1.2, 40,20);

  //orecchio
  fill(91,60,29);
  stroke(91,60,29);
  rect(xdog+36, ydog-50, 8,20);

   //naso
  fill(0,0,0);
  stroke(0,0,0);
  circle (xdog+75, ydog-40, 6)

  //muso
   fill(169,94,19);
  stroke(169,94,19);
  triangle(xdog + 72, ydog / 1.27, 
           xdog + 72, ydog / 1.2 + 10,
           xdog + 52, ydog / 1.2 + 10);
  

  //gamba destra
  fill(91,60,29);
  stroke(91,60,29);
  rect(xdog-42.5, ydog+30, 15,40);

  fill(169,94,19);
  stroke(169,94,19);
  rect(xdog-42.5, ydog+45, 15,15);

  //gamba sinistra
  fill(91,60,29);
  stroke(91,60,29);
  rect(xdog+42.5, ydog+30, 15,40);

  fill(169,94,19);
  stroke(169,94,19);
  rect(xdog+42.5, ydog+45, 15,15);

  //coda
  fill(91,60,29);
  stroke(91,60,29);
  circle (xdog-50, ydog-10, 15)

  //prato
  fill(119,221,119);
  stroke(119,221,119);
  rect(xdog, 326.25, xMax, 147.5);

  //nuvole
  
  fill(245);
  stroke(245);
  //più veloce
  ellipse((frameCount * 1.5) % (xMax + 100) - 50, 50, 60, 30);
  ellipse((frameCount * 1.5) % (xMax + 100) - 80, 50, 60, 30);
  ellipse((frameCount * 1.5) % (xMax + 100) - 60, 40, 40, 30);
  
  //meno veloce
  fill(255);
  stroke(255);
  ellipse((frameCount * 0.8 + 200) % (xMax + 100) - 50, 80, 80, 40);
  ellipse((frameCount * 0.8 + 200) % (xMax + 100) - 80, 80, 80, 40);
  ellipse((frameCount * 0.8 + 200) % (xMax + 100) - 50, 60, 60, 30);
   
  pop()


 
  push();
  //Loop for - fili d'erba
  stroke(34, 139, 34); 
  strokeWeight(2);
  for (let i = 0; i < xMax; i += 10) {
    line(i, 252.5, i - 3, 242.5); // filo d'erba inclinato
  }
  strokeWeight(1); 

   if (mouseIsPressed === true) {
    fill(0); 
    stroke(0)
    textSize(20);       
    textAlign(CENTER);  
    text("bau", xdog + 110, ydog - 30);
  }
  
  pop();

}
