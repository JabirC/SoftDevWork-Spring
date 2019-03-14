/*
Jabir Chowdhury
SoftDev2 pd6
K10 -- Ask Circles [Change || Die]
2019-03-13
*/

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");



pic.addEventListener("click", function(e){
  xcor = e.offsetX;
  ycor = e.offsetY;
  circle(xcor, ycor);
});

clear.addEventListener("click", function(){
  clear();
});

var circle = function(x , y){
  var c = document.createElementNS( "http://www.w3.org/2000/svg" , "circle");

  c.setAttribute("cx" , x);
  c.setAttribute("cy" , y);
  c.setAttribute("r" , "20");
  c.setAttribute("fill" , "red");
  c.setAttribute("stroke" , "black");
  c.addEventListener("click", change);
  c.addEventListener("click", function(e){
    e.stopPropagation();
  });
  pic.appendChild(c);
}

var change = function(){
  if (this.getAttribute('fill') === "red"){
    this.setAttribute("fill", "green");
  }
  else if (this.getAttribute('fill') === "green"){
    var newChild = circle(Math.random() * 500, Math.random() * 500);
    this.remove();
  }
}


var clear = function(){
  while(pic.firstChild){
    pic.removeChild(pic.firstChild)
  }
}
