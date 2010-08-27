const EMPTY = '#000000';
const SNAKE = '#ff0000';
const APPLE = '#00ff00';

const LEFT=37;
const UP=38;
const RIGHT=39;
const DOWN=40;

const X_SIZE = 50;
const Y_SIZE = 50;

game_init();
graphics_init();
score_add(0);

function loop() {
	var result = game_loop();
	graphics_loop();
	if (result) {
		alert('Game over');
	}
	else {
		setTimeout('loop()', 100); //call this function again in 0.1s
	}
}
loop();
