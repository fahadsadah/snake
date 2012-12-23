document.onkeydown = function(event) {
	e = event.keyCode;
	if (e == 65) { e = 37; }
	if (e == 87) { e = 38; }
	if (e == 68) { e = 39; }
	if (e == 83) { e = 40; }
	if (e >= 37 && e <= 40 && directionqueue[directionqueue.length -1] != e) {
		directionqueue.push(e);
	}
	if (e == 32) {
		togglepause();
	}
}
function mouseclicked(x2, y2) {
	console.log("Clicked " + x2.toString + ", " + y2.toString)
	if (paused || board[y2][x2] == SNAKE) {
		togglepause();
	}
	else {
		var theta = (180/Math.PI) * Math.atan2(snake[snake.length - 1][1] - y2, x2 - snake[snake.length - 1][0]);
		switch (direction) {
			case LEFT:
				theta = theta + 180;
				break;
			case UP:
				theta = theta + 270;
				break;
			case DOWN:
				theta = theta + 90;
				break;
		}
		theta = (theta + 360) % 360;
		if (theta > 0 && theta < 180) {
			switch (direction) {
				case UP:
					directionqueue.push(LEFT);
					break;
				case DOWN:
					directionqueue.push(RIGHT);
					break;
				case LEFT:
					directionqueue.push(DOWN);
					break;
				case RIGHT:
					directionqueue.push(UP);
					break;
			}
		}
		else if (theta > 180) {
			switch (direction) {
				case UP:
					directionqueue.push(RIGHT);
					break;
				case DOWN:
					directionqueue.push(LEFT);
					break;
				case LEFT:
					directionqueue.push(UP);
					break;
				case RIGHT:
					directionqueue.push(DOWN);
					break;
			}
		}
	}
}
cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
	cells[i].onclick = function(event) {
		split = event.target.id.split('-');
		mouseclicked(parseInt(split[2]), parseInt(split[1]));
	};
}