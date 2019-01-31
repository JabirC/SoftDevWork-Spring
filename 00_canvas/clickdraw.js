//Jabir Chowdhury
//SoftDev2 pd6
//K00 I See a Red Door
//2019-01-30


var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var clear_btn = document.getElementById("clear");
var draw_btn = document.getElementById("draw");

clear_btn.addEventListener("click" , function(){

    ctx.fillStyle = "white" ;
    ctx.fillRect(0 , 0 , canvas.width , canvas.height );
 }
);

draw_btn.addEventListener("click" , function(){
    var state = document.getElementById("draw")
    if(state.innerHTML === "box"){
      state.innerHTML = "dot";
    }
    else{
      state.innerHTML = "box";
    }
 }
);


canvas.addEventListener("click", function(e){
        ctx.fillStyle = "black";
        if(document.getElementById("draw").innerHTML === "box"){
           ctx.fillRect(e.clientX,e.clientY,20,20);
        }
        else{
            ctx.beginPath();
            ctx.ellipse(e.clientX,e.clientY, 10, 10,0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
  );
