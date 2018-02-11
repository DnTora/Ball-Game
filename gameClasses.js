class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Speed {
	constructor(xSpeed, ySpeed) {
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
}

class Ball {
	constructor(location, radius, color, speed) {
		this.location = location;
		this.radius = radius;
		this.color = color;
		this.speed = speed;
	}
	
	draw(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
		canvasContext.fillStyle = this.color;
		canvasContext.fill();
	}
}
