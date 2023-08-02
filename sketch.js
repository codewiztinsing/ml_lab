 
console.log('ml5 version:', ml5.version);

let mobilenet;

function modelLoaded() {
  console.log("model is ready")
}

function setup(){
	createCanvas(400, 400);
	textSize(width / 3);
	textAlign(CENTER, CENTER);
  mobilenet =ml5.imageClassifier("MobileNet",modelLoaded)
}

function draw(){
	background(200);
	text(ml5.version, width/2, height/2);
}
