function setup(){
  canvas = createCanvas(650,500);
  canvas.position(110,300);
  video = createCapture(VIDEO)
  video.hide();

 tint_color="";
}

function draw(){
   image(video,0,0,650,500)
   tint(tint_color)
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

function take_snapshot(){
save('Apka_Photu.png')
}

