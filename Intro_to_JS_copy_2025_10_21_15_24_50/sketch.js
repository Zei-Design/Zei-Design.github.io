// Global Variable
var x = 30
var y = 10
var name = "Zei Z"
var bool = true
var i = 0

function setup() {
  createCanvas(400, 400);
  
  // log var
  
  // change var
  
  
}

function draw() {
  background(x, y, 10);
  ellipse(x, y, 30, 30)
  // x = sin(i) * width;
  // i = i + 0.1
  // y = cos(i) * height;
  // if var is > 10 change bg with function
  if(mouseX > 200) {
   background(255,0,255)
  } else {
   background(250,250,0)
  }
  // fill(r,g,b) = 0 -> 255
  // background (r,g,b) = 0 -> 255
  // strokeWidth(number)
  x = x - 1
  
  // ellipse(x,y,w,h)
  // rect(x,y,w,h)
  // triangle(x1,y1,x2,y2,x3,y3)
  // line(x1,y1,x2,y2)
  
  //mouseX, mouseY
  strokeWeight(10)
  stroke(355,160,0)
  triangle(mouseX,mouseY,5,5,40,40)
  stroke(0,250,250)
  line(mouseX, mouseY, pmouseX, pmouseY)
  
  // when bg changes set another variable and check for that
  
  // increase var
}

// create function