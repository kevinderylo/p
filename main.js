x=0;
y=0;


draw_circle="";
draw_rectangle="";
draw_square="";

var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function setup(){
    canvas=createCanvas(900, 600);
}
function start(){
    document.getElementById("status").innerHTML="Sytem is listening please say the shape";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="System has recognized the shape as "+content;

    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a circle";
        draw_circle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a rectangle";
        draw_rectangle="set";
    }
    if(content=="square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a square";
        draw_square="set";
    }
    if(content=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a circle";
        draw_circle="set";
    }
    if(content=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a rectangle";
        draw_rectangle="set";
    }
    if(content=="Square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML="System has started drawing a square";
        draw_square="set";
    }
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="System has drawn the circle";
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        w2=Math.floor(Math.random()*100);
        h2=Math.floor(Math.random()*100);
        rect(x, y, w2, h2);
        document.getElementById("status").innerHTML="System has drawn the rectangle";
        draw_rectangle="";
    }
    if(draw_square=="set"){
        w3=Math.floor(Math.random()*100);
        h3=w3;
        square(x, y, w3, h3);
        document.getElementById("status").innerHTML="System has drawn the square";
        draw_square="";
    }
}