function graphics_init() {
	var container = document.getElementById('game');
	var table = document.createElement('table');
	table.style.borderCollapse = 'collapse';
	container.appendChild(table);
	for (y=0;y<Y_SIZE;y++) {
		var row = document.createElement('tr');
		for (x=0;x<X_SIZE;x++) {
			var cell = document.createElement('td');
			cell.id = 'cell-' + y + '-' + x;
			cell.className = 'cell';
			cell.style.width = '10px';
			cell.style.height = '10px';
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	graphics_loop(); //initialise board
}

function graphics_loop() {
	for (y=0;y<Y_SIZE;y++) {
		for (x=0;x<X_SIZE;x++) {
			colour = board[y][x];
			if (tarred && board[y][x] == SNAKE) {
				colour = TAR;
			}
			document.getElementById('cell-' + y + '-' + x).style.backgroundColor = colour;
		}
	}
}