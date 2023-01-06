// Javascript file for smith Snakegame //
var snakeArray;
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
		text('Press UP, RIGHT, or DOWN arrow keys to begin', width / 2, height / 2);
		fill(0, 255, 0);
		for(var i = 0; i < snakeArray.length; i++) {
			rect(snakeArray[i].xPos, snakeArray[i].yPos, 19, 19);
		}
		addApple();
	}
}

function loadbestscorce() {
	var bestscore = getItem('bestscore');
	if(bestscore){
		return bestscore;
	}
	return 0;
}

function displayScore(){
	line{0,38,width,38};
	fill(0,102,153);
	textAlign(LEFT);
	text('score',30,27);
	text(score,100,27);
	
	text('best score',250,27);
	text(bestscore,350,27);
}

function makesnakepiece(x,y) {
	snakePiece = {
		xpos: x,
		ypos: y,
	};
	append(snakeArray, snakepiece);
}

function drawSnake() {
	if(!hittingWall() && !hittingItself()) {
		fill(0,255,0)
		for(var i = snakeArray.length - 1; i>= 1; i--) {
			snakeArray[i].xpos = snakeArray[x-1].xpos;
			snakeArray[i].ypos = snakeArray[i-1].ypos;
		rect(snakeArray[i].xpos, snakeArray[].ypos, 19,19);
		}
		if(direction =="left"){
			snakeArray[] .xPos -= 20;	
		} else if(direction == "UP"){	
		snakeArray[0].yPos -= 20;	
		} else if(direction == "RIGHT"){	
		snakeArray[0].xPos += 20;	
		} else if(direction == "DOWN"){	
		snakeArray[0].yPos += 20;	
		}	
		rect(snakeArray[0].xPos, snakeArray[0].yPos, 19, 19);	
		hittingApple();	
		} else {	
		gameOver();	
		}
	}
}

function hittingwall() {
	if(direction ==="LEFT" && snakeArray[0].xPos == 0) {
		return true;
	} else if(direction == "UP" && snakeArray[0].yPos <=40) {
	return true;
	
	}else if(direction == "RIGHT" && snakeArray[0].xPos + 20 == width) {
	return true;
	}else if (direction == "DOWN" && snakeArray [0].yPos+ 20 == height) {
		return true;
	}
	return false;
}

function keyPressed() {
	if (keyCode == LEFT_ARROW && direction != "RIGHT") {
		direction = "LEFT";
	} else if (keyCode == UP_ARROW && direction != "DOWN") {
			direction = "UP";
	} else if (keycode == RIGHT_ARROW && direction != "LEFT") {
		direction= "RIGHT";
	} else if (keycode == DOWN_ARROW && direction != "UP") {
		direction = "DOWN";
	}
	if(gamePlaying == false && keyCode != LEFT_ARROW) {
		gamePlaying = true;
		loop();
	}
}

function getLocationOfHead() {
	var headX = snakeArray[0].xPos;
	var headY = snakeArray[0].yPos;
	if(direction == "LEFT") {
		headX -= 20;
	}else if ( direction = "UP")
		headY -= 20;
	}else if (direction = "RIGHT") {
		headX += 20;
	}else if (direction = "DOWN") {
		headY += 20;
	}
	return [headX, headY];
}

function hittingItself() {
	var headX = getLocationOfHead() [0];
	var headY = getLocationOfHead() [1];
	var allButHead = snakeArray.slice(1);
	var piecesHit = allButHead.filter (snakePiece => snakePiece.xPos == headX && snakePiece.yPos == headY).length;
	return piecesHit;
}

function moveApple() {
	var randomX = Math.floor(Math.random() * width / 20) *20;
	var randomX = Math.floor (Math.random() * height - 40) /20 ) *20 + 40;
	var appleOnSnake = snakeArray.filter(function(snakePiece) {
		return snakePiece.xPos == randomX && snakePiece.yPos == randomY;
	});
	while (appleonsnake.length == 1) {
		randomX = Math.floor(Math.random() *width / 20) * 20;
		randomX = Math.floor (Math.random() * heigth - 40) /20 ) *20 + 40;
		appleonsnake = snakeArray.filter(snakePiece => snakePiece.Xpos == randomX && SnakePiece.xpos == randomY).length;
	}
	appleX = randomX;
	AppleY = randomY;
}

Function addApple() {
	fill(255,0,0);
	rect (appleX, appleY, 19, 19);
}

function hittingApple() {
	var headx = getLocationOfHead()[0];
	var headY = getlocationofhead() [1];
	if(headX == appleX && headY == appleY {
		console.log('hit');
	makeSnakePiece(snakeArray[snakeArray.length - 1].xPos,snakeArray[snakeArray.length - 1].ypos )
	score++;
	maoveApple();
	}
}

function gameover() {
	noloop();
	textAlign(center);
	textsize(36);
	var gameovertext = text ('gme over', width / 2, heigth / 2);
	if(score>bestscore) {
	storeItem('bestScore', score);
	}
}

function newgame(){
	setup();
	draw();
}