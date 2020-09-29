function setup() {
  createCanvas(800,800);
  background(240);

  //rood
  noStroke();
  fill (255,8,0);
  rect(0,0,300,300);
  
  //geel
  noStroke();
  fill (255,221,0);
  rect(0,500,100,300);

  //blauw
  noStroke();
  fill (0,51,255,);
  rect(300,500,200,200);


  //horzizontaal dunner
  strokeWeight(10);
  stroke(0,0,0);
  line(0, 300, 800, 300);
  
  //verticaal dunner
  strokeWeight(10);
  stroke(0,0,0);
  line(295, 0, 295, 800);

  strokeWeight(15);
  stroke(0,0,0);
  line(0, 500, 800, 500);

  strokeWeight(15);
  stroke(0,0,0);
  line(100, 500, 100, 800);

  strokeWeight(15);
  stroke(0,0,0);
  line(500, 500, 500, 800);

  strokeWeight(15);
  stroke(0,0,0);
  line(300, 700, 500, 700);



  

  
  
  



  // put setup code here
}

function draw() {
  // put drawing code here
}