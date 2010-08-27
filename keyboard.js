var directionqueue = [];
document.onkeydown = function(event) {
	if (event.keyCode >= 37 && event.keyCode <= 40) {
		if (directionqueue[directionqueue.length -1] != event.keyCode) {
			directionqueue.push(event.keyCode);
		}
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