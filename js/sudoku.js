
var sudoku = document.getElementById('sudoku');
var selRow = 1;		// what row is selected
var selCol = 1;		// what collumn is selected
var selCel = 1;		// what cell (3x3) is selected
var selectedBox = document.getElementById('a'+selRow+selCol);	// box where player is at

// set variables for all boxes of the grid
var a11 = document.getElementById('a11');
var a12 = document.getElementById('a12');
var a13 = document.getElementById('a13');
var a14 = document.getElementById('a14');
var a15 = document.getElementById('a15');
var a16 = document.getElementById('a16');
var a17 = document.getElementById('a17');
var a18 = document.getElementById('a18');
var a19 = document.getElementById('a19');

var a21 = document.getElementById('a21');
var a22 = document.getElementById('a22');
var a23 = document.getElementById('a23');
var a24 = document.getElementById('a24');
var a25 = document.getElementById('a25');
var a26 = document.getElementById('a26');
var a27 = document.getElementById('a27');
var a28 = document.getElementById('a28');
var a29 = document.getElementById('a29');

var a31 = document.getElementById('a31');
var a32 = document.getElementById('a32');
var a33 = document.getElementById('a33');
var a34 = document.getElementById('a34');
var a35 = document.getElementById('a35');
var a36 = document.getElementById('a36');
var a37 = document.getElementById('a37');
var a38 = document.getElementById('a38');
var a39 = document.getElementById('a39');

var a41 = document.getElementById('a41');
var a42 = document.getElementById('a42');
var a43 = document.getElementById('a43');
var a44 = document.getElementById('a44');
var a45 = document.getElementById('a45');
var a46 = document.getElementById('a46');
var a47 = document.getElementById('a47');
var a48 = document.getElementById('a48');
var a49 = document.getElementById('a49');

var a51 = document.getElementById('a51');
var a52 = document.getElementById('a52');
var a53 = document.getElementById('a53');
var a54 = document.getElementById('a54');
var a55 = document.getElementById('a55');
var a56 = document.getElementById('a56');
var a57 = document.getElementById('a57');
var a58 = document.getElementById('a58');
var a59 = document.getElementById('a59');

var a61 = document.getElementById('a61');
var a62 = document.getElementById('a62');
var a63 = document.getElementById('a63');
var a64 = document.getElementById('a64');
var a65 = document.getElementById('a65');
var a66 = document.getElementById('a66');
var a67 = document.getElementById('a67');
var a68 = document.getElementById('a68');
var a69 = document.getElementById('a69');

var a71 = document.getElementById('a71');
var a72 = document.getElementById('a72');
var a73 = document.getElementById('a73');
var a74 = document.getElementById('a74');
var a75 = document.getElementById('a75');
var a76 = document.getElementById('a76');
var a77 = document.getElementById('a77');
var a78 = document.getElementById('a78');
var a79 = document.getElementById('a79');

var a81 = document.getElementById('a81');
var a82 = document.getElementById('a82');
var a83 = document.getElementById('a83');
var a84 = document.getElementById('a84');
var a85 = document.getElementById('a85');
var a86 = document.getElementById('a86');
var a87 = document.getElementById('a87');
var a88 = document.getElementById('a88');
var a89 = document.getElementById('a89');

var a91 = document.getElementById('a91');
var a92 = document.getElementById('a92');
var a93 = document.getElementById('a93');
var a94 = document.getElementById('a94');
var a95 = document.getElementById('a95');
var a96 = document.getElementById('a96');
var a97 = document.getElementById('a97');
var a98 = document.getElementById('a98');
var a99 = document.getElementById('a99');

// set variables for storing and checking number duplicates in rows collumns and cells (3x3)
var row1 = [a11,a12,a13,a14,a15,a16,a17,a18,a19];
var row2 = [a21,a22,a23,a24,a25,a26,a27,a28,a29];
var row3 = [a31,a32,a33,a34,a35,a36,a37,a38,a39];
var row4 = [a41,a42,a43,a44,a45,a46,a47,a48,a49];
var row5 = [a51,a52,a53,a54,a55,a56,a57,a58,a59];
var row6 = [a61,a62,a63,a64,a65,a66,a67,a68,a69];
var row7 = [a71,a72,a73,a74,a75,a76,a77,a78,a79];
var row8 = [a81,a82,a83,a84,a85,a86,a87,a88,a89];
var row9 = [a91,a92,a93,a94,a95,a96,a97,a98,a99];

var col1 = [a11,a21,a31,a41,a51,a61,a71,a81,a91];
var col2 = [a12,a22,a32,a42,a52,a62,a72,a82,a92];
var col3 = [a13,a23,a33,a43,a53,a63,a73,a83,a93];
var col4 = [a14,a24,a34,a44,a54,a64,a74,a84,a94];
var col5 = [a15,a25,a35,a45,a55,a65,a75,a85,a95];
var col6 = [a16,a26,a36,a46,a56,a66,a76,a86,a96];
var col7 = [a17,a27,a37,a47,a57,a67,a77,a87,a97];
var col8 = [a18,a28,a38,a48,a58,a68,a78,a88,a98];
var col9 = [a19,a29,a39,a49,a59,a69,a79,a89,a99];

var cel1 = [a11,a12,a13,a21,a22,a23,a31,a32,a33];
var cel2 = [a14,a15,a16,a24,a25,a26,a34,a35,a36];
var cel3 = [a17,a18,a19,a27,a28,a29,a37,a38,a39];
var cel4 = [a41,a42,a43,a51,a52,a53,a61,a62,a63];
var cel5 = [a44,a45,a46,a54,a55,a56,a64,a65,a66];
var cel6 = [a47,a48,a49,a57,a58,a59,a67,a68,a69];
var cel7 = [a71,a72,a73,a51,a52,a53,a91,a92,a93];
var cel8 = [a74,a75,a76,a84,a85,a86,a94,a95,a96];
var cel9 = [a77,a78,a79,a87,a88,a89,a97,a98,a99];

// arrays for accessing the rows, collumns and cells dinamically 
var rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9];
var cols = [col1,col2,col3,col4,col5,col6,col7,col8,col9];
var cels = [cel1,cel2,cel3,cel4,cel5,cel6,cel7,cel8,cel9];

var checkDuplicates = function(_num) {

	checkRowDuplicates(_num);
	checkColDuplicates(_num);
	checkCelDuplicates(_num);

};
var checkRowDuplicates = function(_num) {

	var _a = rows[selRow-1];
	selectedBox.children[0].classList.remove('duplicated-number');

	for (var i = 0; i < _a.length; i++) {
		if (_a[i].id != selectedBox.id) {
		    if (_a[i].children[0].innerHTML == _num) {
		        // found duplicate number, change font color to red
				_a[i].children[0].classList.add('duplicated-number');
				selectedBox.children[0].classList.add('duplicated-number');
		    } else {
				_a[i].children[0].classList.remove('duplicated-number');
		    }
		}
	}
};
var checkColDuplicates = function(_num) {

	var _a = cols[selCol-1];

	for (var i = 0; i < _a.length; i++) {
		if (_a[i].id != selectedBox.id) {
		    if (_a[i].children[0].innerHTML == _num) {
		        // found duplicate number, change font color to red
				_a[i].children[0].classList.add('duplicated-number');
				selectedBox.children[0].classList.add('duplicated-number');
		    } else {
				_a[i].children[0].classList.remove('duplicated-number');
		    }
		}
	}
};
var checkCelDuplicates = function(_num) {

	var _a = cels[selCel-1];

	for (var i = 0; i < _a.length; i++) {
		if (_a[i].id != selectedBox.id) {
		    if (_a[i].children[0].innerHTML == _num) {
		        // found duplicate number, change font color to red
				_a[i].children[0].classList.add('duplicated-number');
				selectedBox.children[0].classList.add('duplicated-number');
		    } else {
				_a[i].children[0].classList.remove('duplicated-number');
		    }
		}
	}
};

document.onkeyup = function(eve) {
	console.log("Key pressed: " + eve.keyCode + " / " + eve.charCode);

	var keyPressed = eve.keyCode;
	var selNumber = 0;

	switch (keyPressed) {
		case 65: // A key
		case 37: // left
			if (selCol != 1) {
				selCol--;
				calculateCell();
			}
		break;
		case 68: // D key
		case 39:  // right
			if (selCol != 9) {
				selCol++;
				calculateCell();
			}
		break;
		case 87: // W key
		case 38:  // up
			if (selRow != 1) {
				selRow--;
				calculateCell();
			}
		break;
		case 83: // S key
		case 40:  // down
			if (selRow != 9) {
				selRow++;
				calculateCell();
			}
		break;
		case 49:
			selNumber = '1';
		break;
		case 50:
			selNumber = '2';
		break;
		case 51:
			selNumber = '3';
		break;
		case 52:
			selNumber = '4';
		break;
		case 53:
			selNumber = '5';
		break;
		case 54:
			selNumber = '6';
		break;
		case 55:
			selNumber = '7';
		break;
		case 56:
			selNumber = '8';
		break;
		case 57:
			selNumber = '9';
		break;
		case 48:
			selNumber = '';
		break;
	}

	if (selNumber !== 0) {
		checkDuplicates(selNumber);
		selectedBox.children[0].innerHTML = selNumber;
	} else {
		selectedBox.classList.remove('bSelected');
		selectedBox = document.getElementById('a'+selRow+selCol);
		selectedBox.classList.add('bSelected');
	}
};
var calculateCell = function() {

	if (selRow < 4) {
		if (selCol < 4) {
			selCel = 1;
		} else if (selCol < 7) {
			selCel = 2;
		} else {
			selCel = 3;
		}
	} else if (selRow < 7) {
		if (selCol < 4) {
			selCel = 4;
		} else if (selCol < 7) {
			selCel = 5;
		} else {
			selCel = 6;
		}
	} else {
		if (selCol < 4) {
			selCel = 7;
		} else if (selCol < 7) {
			selCel = 8;
		} else {
			selCel = 9;
		}
	}
	// console.log("selected -> row:" + selRow + " col:"+selCol+" cel:"+selCel);
};







