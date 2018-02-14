var GRAVITY = 1;
var BALL_MOVEMENT_TIMER_INTERVAL = 20;

var canvas;
var canvasContext;
var ball;
var gameInProgress;



initialize();

function initialize() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");
	ball = new Ball(new Point(200, 300), 10, "red", 0);
	gameInProgress = false;
	ball.draw(canvasContext);
	ts = new TubesSegment(300, 50, 300, 200, "black", canvas.height);
	ts.draw(canvasContext);
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
	}
}, BALL_MOVEMENT_TIMER_INTERVAL);
