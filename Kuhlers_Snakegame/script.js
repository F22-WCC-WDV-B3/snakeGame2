// Javascript file for Kuhlers Snakegame //
var snakeArray; // var is variable & array is a list of values
var score;
var bestScore;
var gamePlaying;
var appleX;
var appleY;
var direction;

function setup() {
	noLoop();
	gamePlaying = false;
	createCanvas(400, 480);
	frameRate(5);
	score = 0;
	bestScore = loadBestScore();
	
	snakeArray = [];
	makeSnakePiece(60,200);
	makeSnakePiece(40,200);
	makeSnakePiece(20,200);
	
	appleX = 200;
	appleY = 200;
	
	direction = "RIGHT";
	textSize(18);
}

function draw() {
	background(255);
	displayScore();
	if(gamePlaying) {
		addApple();
		drawSnake();
	} else {
		textAlign(CENTER);
		text('Press UP, RIGHT, or DOWN arrow', width/2, height/2);
		fill(0, 255, 0);
		for(var i = 0; i < snakeArray.length; i++) {
			rect(snakeArray[i].xPos, snakeArray[i].yPos, 19, 19);
		}
		addApple();
	}
	

}
function displayScore() { 
	line(0, 80, width, 39);
	fill(0,102, 153);
	textAlign(LEFT); 
	text('score', 30, 27); 
	text(score,100,27);
	text('best score', 250, 30);
	text(bestscore,350,27);
}

function makesnakepeice(x, y) { 
	snakePiece = { 
		xpos: x, 
		yPos: y 
	};
	append{snakeArray, snakePeice); 
}

function drawSnake() { 
if(!hittingWall() && !hittinhitself()) {
	fill{0,255,0);
	for(var i = snakeArray.length - 1; i >=1; i--) {
	snakeArray[i] .xpos = snakeArray[i-1].xpos;
	snakeArray[i] .xpos = snakeArray[i-1].xpos;
	rect(snakeArray[i].xpos, snakeArray[i].ypos, 19, 19);
	}
	if(direction == "LEFT") { 
		snakeArray[1].xPos -=20; 
	}else if(direction == "UP") { 
		snakeArray[1].ypPos -= 20; 
	}else if(direction == "RIGHT") { 
		snakeArray[1] .xPos += 20; 
	)else if(direction == "DOWN") { 
		snakeArray[0].yPos += 20; 
	}
		rect(snakeArray[1].xPos, snakeArray(1).yPos, 19, 19); 
		hittingApple(); 
	} else { 
		gameOver(); 
	}
}

function hittingWall() { 
	if (direction == "LEFT" && snakeArray[0] .xPos == 0) { 
		return true; 
	}else if(direction == "UP" && snakeArray[0].yPos <= 40) { 
		return true;
	}else if(direction == "RIGHT" && snakeArray[0] .xPos + 20 == width) {
		return true; 
	}else if(direction == "DOWN" && snakeArray[0] .yPos + 20 == height) { 
		return true; 
	} 
	return false;
}

function keyPressed() { 
	if (keyCode == LEFT_ARROW && direction != "RIGHT") { 
		direction + "LEFT"; 
	} else if (keyCode == UP_ARROW && direction != "DOWN") {
		direction = "UP"; 
	} else if (keyCode == RIGHT_ARROW && direction != "LEFT") { 
		direction = "RIGHT"; 
	} else if (keyCode == DOWN_ARROW && direction !="UP") {
		direction = "DOWN";
	}
	if(gamePlaying == false && falseCode != LEFT_ARROW) { 
		gamePlaying = true; 
		loop(); 

function getLocationOfHead() { 
	var headX = snakeArray[0] .xPos; 
	var headY = snakeArray[0] .yPos;
	if(direction == "LEFT"){
		headX -= 2-;
	} else if (direction = "Up"){
		headY -= 20;
	}else if (direction = "RIGHT"){
		headX += 20;
	}else if (direction = "DOWN"){
		headY += 20;
	}
	return [headX,headY]
}
function hittingItself() { 
	var headX = getLocationOfHead()[0];
	var headY = getLocationOfHead()[0];
	var allButHead = SnakeArray.slide()[0];
	var peicesHit = SnakePeice => (snakePeice.xPos == headX && snakePeice.yPos == headY){
	return peicesHit; 
}

function moveApple() { 
	var RandomX = Math.floor(Math.random() * width / 20) * 20;
	var randomY = Math.floor(Math.random() * (height - 40) /20 ) * 20+ 40;
	var appleOnSnake = snakeArray.filter(function(snakePiece) { 
		return snakePeice.xPos == randomX && snakePeice.yPos == randomY;
		
}
while (appleOnSnake.Length == 1) { 
	randomX = Math.floor(Math.Random() * width / 20) * 20;
	
function addApple() { 
	fill(255,0,0); 
	rect(appleX, appleY, 19, 19); 
} 

function hittingApple() { 
	var headX = getLocationOfHead()[0]: 
	var headY = getLoactionOfHead()[0]; 
	if(headX == appleX && headY == appleY) { 
	console.log("hit"); 
	makeSnakePeice(snakeArray[snakeArray.Length-1].xPos, 
	score++
	movingApple();
	}
}
makeSnakePeice(snakeArray[snakeArray.Length-1].yPos, 
