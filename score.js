var score = 0;
function score_add(value) {
	score = score + value;
	var scorehole = document.getElementById('score');
	scorehole.innerHTML = score;
	var submit = document.getElementById('submit');
	submit.href = 'http://twitter.com/?status=' + escape('I just scored ' + score + ' at http://2tu.us/2m07');
}