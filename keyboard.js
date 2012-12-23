var directionqueue = [];
document.onkeydown = function(event) {
	e = event.keyCode;
	if (e == 65) { e = 37; }
	if (e == 87) { e = 38; }
	if (e == 68) { e = 39; }
	if (e == 83) { e = 40; }
	if (e >= 37 && e <= 40 && directionqueue[directionqueue.length -1] != e) {
		directionqueue.push(e);
	}
}

function getdirection() {
	if (directionqueue.length > 0) {
		return directionqueue.shift();
	}
	else {
		return 0;
	}
}