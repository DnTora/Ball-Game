var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");
var ball = new Ball(new Point(100, 100), 50, "red", new Speed(0, 0));
ball.draw(canvasContext);

var GRAVITY = 0.5;
var BALL_MOVEMENT_TIMER_INTERVAL = 20;

window.setInterval(function() {
	if (ball.location.x - ball.radius <= 0 && ball.speed.xSpeed < 0) {
		ball.location.x = ball.radius;
		ball.speed.xSpeed *= -1;
	} else if (ball.location.x + ball.radius >= canvas.width && ball.speed.xSpeed > 0) {
		ball.location.x = canvas.width - ball.radius;
		ball.speed.xSpeed *= -1;
	}
	if (ball.location.y - ball.radius <= 0 && ball.speed.ySpeed < 0) {
		ball.location.y = ball.radius;
		ball.speed.ySpeed *= -1;
	} else if (ball.location.y + ball.radius >= canvas.height && ball.speed.ySpeed > 0) {
		ball.location.y = canvas.height - ball.radius;
		ball.speed.ySpeed *= -1;
	}
	
	ball.speed.ySpeed += GRAVITY;
	ball.location.x += ball.speed.xSpeed;
	ball.location.y += ball.speed.ySpeed;
	ball.speed.ySpeed += GRAVITY;
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw(canvasContext);
}, BALL_MOVEMENT_TIMER_INTERVAL);
