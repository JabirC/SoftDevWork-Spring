/*
Jabir Chowdhury
SoftDev2 pd6
K11: Ask Circles [Change || Die] …While On The Go
2019-03-18
*/

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var movebutton = document.getElementById("move")
var randbutton = document.getElementById('?');
var requestID;


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
  c.setAttribute("x-vel" , "7")
  c.setAttribute("y-vel" , "7")
  c.setAttribute("fill" , "red");
  c.setAttribute("stroke" , "black");
  c.setAttribute("turn", "0");
  c.setAttribute("count", "1");
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

var animate = function() {
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
      var move = function(child){
          velx = parseInt(child.getAttribute("x-vel"));
          vely = parseInt(child.getAttribute("y-vel"));
          xcor = parseInt(child.getAttribute("cx"));
          ycor = parseInt(child.getAttribute("cy"));
          radius = parseInt(child.getAttribute("r"));
          height = parseInt(pic.getAttribute("height"));
          width = parseInt(pic.getAttribute("width"));
          if(xcor + radius + velx > width || xcor - radius + velx < 0){
            child.setAttribute("x-vel", -velx);
          }
          if(ycor + radius +vely > height || ycor - radius + vely < 0){
            child.setAttribute("y-vel", -vely);
          }
          child.setAttribute("cx", xcor + velx);
          child.setAttribute("cy", ycor + vely);
      }
      for(var i=0;i<pic.childElementCount;i++){
          move(pic.children[i]);
      }
      requestID = window.requestAnimationFrame(animate);
}

var wiggle = function() {
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
      var orb = function(child){
          velx = parseInt(child.getAttribute("x-vel"));
          vely = parseInt(child.getAttribute("y-vel"));
          xcor = parseInt(child.getAttribute("cx"));
          ycor = parseInt(child.getAttribute("cy"));
          radius = parseInt(child.getAttribute("r"));
          height = parseInt(pic.getAttribute("height"));
          width = parseInt(pic.getAttribute("width"));
          turn = parseInt(child.getAttribute("turn"));
          count = parseInt(child.getAttribute("count"));
          if(xcor + radius + velx > width || xcor - radius + velx < 0){
            child.setAttribute("x-vel", -velx);
          }
          if(ycor + radius +vely > height || ycor - radius + vely < 0){
            child.setAttribute("y-vel", -vely);
          }
          if(turn === 0){
            child.setAttribute("count" , 1);
          }
          else if (turn === 5) {
            child.setAttribute("count" , -1);
          }
          if(count === 1){
            child.setAttribute("cx", xcor + velx);
            child.setAttribute("turn" , turn + count);
          }
          else{
            child.setAttribute("cy", ycor + vely);
            child.setAttribute("turn" , turn + count);
          }
      }
      for(var i=0;i<pic.childElementCount;i++){
          orb(pic.children[i]);
      }
      requestID = window.requestAnimationFrame(wiggle);
}



var clear = function(){
  while(pic.firstChild){
    pic.removeChild(pic.firstChild)
  }
}

movebutton.addEventListener("click", animate);
randbutton.addEventListener("click", wiggle);
