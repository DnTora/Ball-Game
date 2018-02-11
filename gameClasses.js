class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Ball {
	constructor(location, radius, color, ySpeed) {
		this.location = location;
		this.radius = radius;
		this.color = color;
		this.ySpeed = ySpeed;
	}
	
	draw(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
		canvasContext.fillStyle = this.color;
		canvasContext.fill();
	}
}
