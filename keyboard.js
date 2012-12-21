var directionqueue = [];
var alt = []; alt[87] = 38; alt[65] = 37; alt[83] = 40; alt[68] = 39;
document.onkeydown = function(event) {
	if (!(event.keyCode >= 37 && event.keyCode <= 40) && alt[event.keyCode] >= 37 && alt[event.keyCode] <= 40) {
		e = alt[event.keyCode];
	}
	else {
		e = event.keyCode;
	}
	if (e >= 37 && e <= 40) {
		if (directionqueue[directionqueue.length -1] != e) {
			directionqueue.push(e);
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