const GRAVITY = 1;
const TIMER_INTERVAL = 20;
const TUBES_SEGMENTS_WIDTH = 50;
const FIRST_TUBES_SEGMENT_INITIAL_X_LOCATION = 600;
const TUBES_SEGMENTS_HOLE_HEIGHT = 200;
const TUBES_SEGMENTS_MARGIN = 500;
const TUBES_SEGMENTS_ARRAY_LIMIT_AMOUNT = 10;

var canvas;
var canvasContext;
var ball;
var gameInProgress;
var tubesSegmentsArray;



initialize();

function initialize() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");
	ball = new Ball(new Point(200, 300), 10, "red", 0);
	gameInProgress = false;
	ball.draw(canvasContext);
	
	tubesSegmentsArray = new LimitedArray(TUBES_SEGMENTS_ARRAY_LIMIT_AMOUNT);
	for (i = 0; i < TUBES_SEGMENTS_ARRAY_LIMIT_AMOUNT; i++) {
		tubesSegmentsArray.add(new TubesSegment(FIRST_TUBES_SEGMENT_INITIAL_X_LOCATION + i * TUBES_SEGMENTS_MARGIN, TUBES_SEGMENTS_WIDTH, getRandomInt(0, canvas.height - TUBES_SEGMENTS_HOLE_HEIGHT), TUBES_SEGMENTS_HOLE_HEIGHT, "black", canvas.height));
		tubesSegmentsArray.get(i).draw(canvasContext);
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("click", function() {
	ball.ySpeed = -15;
	gameInProgress = true;
});

window.setInterval(function() {
	if (gameInProgress) {
		if (ball.location.y - ball.radius <= 0) {
			ball.location.y = ball.radius;
			ball.ySpeed = 0;
		} else if (ball.location.y + ball.radius >= canvas.height) {
			alert("Game over!");
			initialize();
		}
		
		ball.ySpeed += GRAVITY;
		ball.location.y += ball.ySpeed;
		
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		ball.draw(canvasContext);
		
		
		
		for (i = 0; i < TUBES_SEGMENTS_ARRAY_LIMIT_AMOUNT; i++) {
			tubesSegmentsArray.get(i).topTube.location.x--;
			tubesSegmentsArray.get(i).bottomTube.location.x--;
			tubesSegmentsArray.get(i).draw(canvasContext);
		}
	}
}, TIMER_INTERVAL);
