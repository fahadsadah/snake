var EMPTY = '#000000';
var SNAKE = '#ff0000';
var APPLE = '#00ff00';
var POISON = '#0000ff';
var TAR = '#8B5A00';
var SELFEAT = '#ffffff';
var droppable = [APPLE, POISON, TAR, SELFEAT];

var LEFT=37;
var UP=38;
var RIGHT=39;
var DOWN=40;

var X_SIZE = 50;
var Y_SIZE = 50;

var paused = false;

var directionqueue = [];
function getdirection() {
	if (directionqueue.length > 0) {
		return directionqueue.shift();
	}
	else {
		return 0;
	}
}

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
			
			if (tarred > 0) {
				wait = Math.floor(wait * 2);
			}
			setTimeout(function() { loop(); }, wait);
		}
	}
	else {
		setTimeout(function() { loop(); }, 50);
	}
}
loop();
