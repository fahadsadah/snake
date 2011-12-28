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

var paused = false;

game_init();
graphics_init();
score_add(0);

function togglepause() {
	if (!paused) {
		paused = true;
	}
	else {
		paused = false;
	}
}

function loop() {
	if (!paused) {
		var result = game_loop();
		graphics_loop();
		if (result) {
			var msg = document.getElementById('message');
			msg.innerHTML = '<h3>Game over! Click <a href=\'javascript:location.reload(true);\'>here</a> to restart!</h3>'
		}
		else {
			//delay starts at 100ms
			//for every apple, it shrinks 1ms, to a min of 10ms
			var wait = 100 - (score_get() / 10);
			if (wait < 10) {
				wait = 10;
			}
			setTimeout(loop, wait);
		}
	}
	else {
		setTimeout(loop, 50);
	}
}
loop();
