
var sudoku = document.getElementById('sudoku');
var selRow = 1;
var selCol = 1;
var selectedBox = document.getElementById('a'+selRow+selCol);


keyPressed = function(event) {
	
	// console.log(event.keyCode);
	switch (event.keyCode) {
		case 97: // A key - left
			if (selCol != 1) {
				selCol--;
			}
		break;
		case 100: // D key - right
			if (selCol != 9) {
				selCol++;
			}
		break;
		case 119: // W key - up
			if (selRow != 1) {
				selRow--;
			}
		break;
		case 115: // S key - down
			if (selRow != 9) {
				selRow++;
			}
		break;
		case 49:
			selectedBox.innerHTML = '1';
		break;
		case 50:
			selectedBox.innerHTML = '2';
		break;
		case 51:
			selectedBox.innerHTML = '3';
		break;
		case 52:
			selectedBox.innerHTML = '4';
		break;
		case 53:
			selectedBox.innerHTML = '5';
		break;
		case 54:
			selectedBox.innerHTML = '6';
		break;
		case 55:
			selectedBox.innerHTML = '7';
		break;
		case 56:
			selectedBox.innerHTML = '8';
		break;
		case 57:
			selectedBox.innerHTML = '9';
		break;
	}

	selectedBox.classList.remove('bSelected');
	selectedBox = document.getElementById('a'+selRow+selCol);
	selectedBox.classList.add('bSelected');
}








