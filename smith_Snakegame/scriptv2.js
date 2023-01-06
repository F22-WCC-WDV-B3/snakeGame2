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

function loadBestScore() { // loadBestScore
	var bestScore = getItem('bestScore'); // bestScore x 2
	if(bestScore) { // bestScore
		return bestScore; //bestScore
	}
	return 0;
}

function displayScore() {
	line(0, 38, width, 38); // ( ) not { } 
	fill(0, 102, 153);
	textAlign(LEFT);
	text('Score', 30, 27);
	text(score, 100, 27);
	
	text('best score', 250, 27);
	text(bestScore, 350, 27); // bestScore
}

function makeSnakePiece(x, y) { // makeSnakePiece
	snakePiece = {
		xPos: x, // xPos
		yPos: y // yPos, no comma after y
	};
	append(snakeArray, snakePiece); // snakePiece
}

function drawSnake() {
	if(!hittingWall() && !hittingItself()) {
		fill(0, 255, 0); // add ;
		for(var i = snakeArray.length - 1; i >= 1; i--) {
			snakeArray[i].xPos = snakeArray[i-1].xPos; // xPos, i-1, xPos
			snakeArray[i].yPos = snakeArray[i-1].yPos; // yPos, yPos
			rect(snakeArray[i].xPos, snakeArray[i].yPos, 19,19); // xPos, ]i], yPos
		}
		if(direction == "LEFT") { // LEFT
			snakeArray[0].xPos -= 20; // [0], spacing
		} else if(direction == "UP") {
			snakeArray[0].yPos -= 20; // indent
		} else if(direction == "RIGHT") {
			snakeArray[0].xPos += 20; // indent
		} else if(direction == "DOWN") {
			snakeArray[0].yPos += 20; // indent
		}
		rect(snakeArray[0].xPos, snakeArray[0].yPos, 19, 19);
		hittingApple();
	} else {
		gameOver(); // indent
	}
}

function hittingWall() { // hittingWall
	if(direction == "LEFT" && snakeArray[0].xPos == 0) { // two == not three
		return true;
	} else if(direction == "UP" && snakeArray[0].yPos <= 40) {
		return true; // indent
	} else if(direction == "RIGHT" && snakeArray[0].xPos + 20 == width) {
		return true;
	} else if(direction == "DOWN" && snakeArray[0].yPos + 20 == height) {
		return true; // indent
	}
	return false;
}

function keyPressed() {
	if (keyCode == LEFT_ARROW && direction != "RIGHT") {
		direction = "LEFT";
	} else if (keyCode == UP_ARROW && direction != "DOWN") {
		direction = "UP"; // indent
	} else if (keyCode == RIGHT_ARROW && direction != "LEFT") { // keyCode
		direction = "RIGHT"; // spacing
	} else if (keyCode == DOWN_ARROW && direction != "UP") { // keyCode
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
	} else if (direction == "UP") { // ==, add {
		headY -= 20;
	} else if (direction == "RIGHT") { // ==
		headX += 20;
	} else if (direction == "DOWN") { // ==
		headY += 20;
	}
	return [headX, headY];
}

function hittingItself() {
	var headX = getLocationOfHead()[0];
	var headY = getLocationOfHead()[1];
	var allButHead = snakeArray.slice(1);
	var piecesHit = allButHead.filter(snakePiece => snakePiece.xPos == headX && snakePiece.yPos == headY).length;
	return piecesHit;
}

function moveApple() {
	var randomX = Math.floor(Math.random() * width / 20) * 20; // spacing
	var randomY = Math.floor(Math.random() * (height - 40) / 20) * 20 + 40; //randomY, ( before height
	var appleOnSnake = snakeArray.filter(function(snakePiece) {
		return snakePiece.xPos == randomX && snakePiece.yPos == randomY;
	});
	while(appleOnSnake.length == 1) { // appleOnSnake
		randomX = Math.floor(Math.random() * width / 20) * 20;
		randomY = Math.floor(Math.random() * (height - 40) / 20) * 20 + 40; // randomY, height 
		appleOnSnake = snakeArray.filter(snakePiece => snakePiece.xPos == randomX && snakePiece.xPos == randomY).length; // appleOnSnake, xPos, snakePiece, xPos 
	}
	appleX = randomX;
	appleY = randomY; // appleY
}

function addApple() { // function
	fill(255, 0, 0);
	rect(appleX, appleY, 19, 19); // no space after rect
}

function hittingApple() {
	var headX = getLocationOfHead()[0]; // headX
	var headY = getLocationOfHead()[1]; // getLocationOfHead
	if(headX == appleX && headY == appleY) { // )
		console.log('hit');
		makeSnakePiece(snakeArray[snakeArray.length - 1].xPos, snakeArray[snakeArray.length - 1].yPos); // indent, yPos, add ;
		score++; // indent
		moveApple(); // moveApple(), indent
	}
}

function gameOver() { // gameOver
	noLoop(); // noLoop
	textAlign(CENTER); // CENTER
	textSize(36); // textSize
	var gameOverText = text('gme over', width / 2, height / 2); // gameOverText, height
	if(score > bestScore) { // spacing & bestScore
		storeItem('bestScore', score); // indent
	}
}

function newGame() { // newGame
	setup();
	draw();
}