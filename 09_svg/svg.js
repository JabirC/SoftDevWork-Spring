
/*
Jabir Chowdhury
SoftDev2 pd6
K #09: Connect the Dots
2019-03-12 
*/

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var prevX = NaN;
var prevY = NaN;



pic.addEventListener("click", function(e){
  xcor = e.offsetX;
  ycor = e.offsetY;
  if(!isNaN(prevX)){
    line(xcor,ycor);
    circle(prevX, prevY);
  }
  circle(xcor, ycor);
  prevX = xcor;
  prevY = ycor;
});

clear.addEventListener("click", function(){
  clear();
});

var circle = function(x , y){
  var c = document.createElementNS( "http://www.w3.org/2000/svg" , "circle");

  c.setAttribute("cx" , x);
  c.setAttribute("cy" , y);
  c.setAttribute("r" , "10");
  c.setAttribute("fill" , "red");
  c.setAttribute("stroke" , "black");
  pic.appendChild(c);
}

var line = function(x , y){
  var j = document.createElementNS( "http://www.w3.org/2000/svg" , "line");
  j.setAttribute('x1',prevX);
  j.setAttribute('y1',prevY);
  j.setAttribute('x2',x);
  j.setAttribute('y2',y);
  j.setAttribute("stroke", "black")
  pic.appendChild(j);
}

var clear = function(){
  while(pic.firstChild){
    pic.removeChild(pic.firstChild)
  }
  prevX = NaN;
  prevY = NaN;
}
