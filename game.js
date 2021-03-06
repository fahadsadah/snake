var board = [];
var snake = [];
var snakelength = 1;
var nextdrop = 10 * (Math.floor(Math.random()*6)+7); //Get a random multiple of 10 between 70 and 130 - number of points the next drop will occur at 
var direction = Math.floor(Math.random()*2)+38; //Get a random number from 38-40 (a direction)

var tarred = 0;
var selfeat = 0;

function addfruit(fruit) {
	var x = Math.floor(Math.random()*X_SIZE);
	var y = Math.floor(Math.random()*Y_SIZE);
	while (board[y][x] != EMPTY) {
		var x = Math.floor(Math.random()*X_SIZE);
		var y = Math.floor(Math.random()*Y_SIZE);
	}
	board[y][x] = fruit;
}
function game_init() {
	for (y=0;y<Y_SIZE;y++) {
		board[y] = [];
		for (x=0;x<X_SIZE;x++) {
			board[y][x] = EMPTY;
		}
	}
	var initx = Math.floor(Math.random()*X_SIZE);
	var inity = Math.floor(Math.random()*Y_SIZE);
	snake[0] = [initx, inity];
	board[inity][initx] = SNAKE;
	addfruit(APPLE);
}
function game_loop() {
	var newdir = getdirection();
	if (newdir != 0 && direction + 2 != newdir && direction - 2 != newdir) {
		direction = newdir;
	}
	switch (direction) {
		case UP:
			var x = snake[snake.length-1][0];
			var y = snake[snake.length-1][1]-1;
			if (y == -1) {
				y = Y_SIZE-1;
			}
			var contents = board[y][x];
			break;
		case DOWN:
			var x = snake[snake.length-1][0];
			var y = (snake[snake.length-1][1]+1)%Y_SIZE;
			var contents = board[y][x];
			break;
		case LEFT:
			var x = snake[snake.length-1][0]-1;
			if (x == -1) {
				x = X_SIZE-1;
			}
			var y = snake[snake.length-1][1];
			var contents = board[y][x];
			break;
		case RIGHT:
			var x = (snake[snake.length-1][0]+1)%X_SIZE;
			var y = snake[snake.length-1][1];
			var contents = board[y][x];
			break;
	}
	if (contents == EMPTY || (contents == SNAKE && selfeat)) {
		snake[snake.length] = [x, y];
		board[y][x] = SNAKE;
		
		if (snake.length > snakelength) {
			removeme = snake.shift();
			board[removeme[1]][removeme[0]] = EMPTY;
		}
		if (snake.length > snakelength) {
			removeme = snake.shift();
			board[removeme[1]][removeme[0]] = EMPTY;
		}
	}
	if (contents == APPLE) {
		snake[snake.length] = [x, y];
		board[y][x] = SNAKE;
		
		snakelength += 3;
		addfruit(APPLE);
		
		score_add(10);
		
		if (score == nextdrop) {
			addfruit(droppable[Math.floor(Math.random()*droppable.length)]);
			nextdrop = nextdrop + (10 * (Math.floor(Math.random()*6)+7)); //Next drop is 7-13 apples away
		}
	}
	if (contents == POISON) {
		snake[snake.length] = [x, y];
		board[y][x] = SNAKE;
		
		addfruit(POISON);
		addfruit(POISON);
		
		if (!selfeat) {
			score_add(-10);
		}
	}
	if (contents == TAR) {
		snake[snake.length] = [x, y];
		board[y][x] = SNAKE;
		
		var wait = 100 - (score_get() / 10); //Current wait policy here
		if (wait < 10) {
			wait = 10;
		}
		wait = Math.round(1000/wait); //Turns per second
		tarred = Math.ceil(2.5 * wait); //Tar for five seconds worth of turns 
	}
	if (contents == SELFEAT) {
		snake[snake.length] = [x, y];
		board[y][x] = SNAKE;
		
		var wait = 100 - (score_get() / 10); //Current wait policy here
		if (wait < 10) {
			wait = 10;
		}
		wait = Math.round(1000/wait); //Turns per second
		selfeat = Math.ceil(2.5 * wait); //Selfeat for five seconds worth of turns 
	}
	if (contents == SNAKE && !selfeat) {
		return 1;
	}
	if (tarred > 0) {
		tarred = tarred - 1;
	}
	if (selfeat > 0) {
		selfeat = selfeat - 1;
	}
	return 0;
}