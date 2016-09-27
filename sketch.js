var x = 50;
var y = 50;
var speed = 2;

var c;

function setup() {
  createCanvas(600,800);
  c = color(255,255,255);
}

function draw() {
	background(255);
	
	fill(0);
	noStroke();
	
	text("X coordinate is :" + x,20,20);

	stroke(255,0,0);
	fill(c);
  ellipse(x,y,50,50);

	if(x >= width-25){
		speed = speed * -1;
		c = color(random(255),random(255),random(255))
	}
  
	if(x <= 25){
		speed = speed * -1;
		c = color(random(255),random(255),random(255))
	}
  
  x = x + speed;
}


function mousePressed(){
		c = color(random(255),random(255),random(255));		
}

function keyTyped(){
	if (key === 'a' ){
	speed = 10
	}
	if (key === 's' ){
	speed = 2
	}
}




