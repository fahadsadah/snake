const EMPTY = '#000000';
const SNAKE = '#ff0000';
const APPLE = '#00ff00';
const POISON = '#0000ff';

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
		//delay starts at 100ms
		//for every apple, it shrinks 0.25ms, to a min of 10ms
		var wait = 100 - (score_get() / 25);
		if (wait < 10) {
			wait = 10;
		}
		setTimeout('loop()', wait);
	}
}
loop();
