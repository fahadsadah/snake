var score = 0;
function score_add(value) {
	score = score + value;
	var scorehole = document.getElementById('score');
	scorehole.innerHTML = score;
}
function score_get() {
	return score;
}
