

$(document).ready(function() {

	var sudoku = $('#sudoku');
	var selRow = 1;		// what row is selected
	var selCol = 1;		// what collumn is selected
	var selCel = 1;		// what cell (3x3) is selected
	var selectedBox = $('#a'+selRow+selCol);	// box where player is at

	// set variables for all boxes of the grid
	var a11 = $('#a11');var a12 = $('#a12');var a13 = $('#a13');var a14 = $('#a14');var a15 = $('#a15');var a16 = $('#a16');var a17 = $('#a17');var a18 = $('#a18');var a19 = $('#a19');
	var a21 = $('#a21');var a22 = $('#a22');var a23 = $('#a23');var a24 = $('#a24');var a25 = $('#a25');var a26 = $('#a26');var a27 = $('#a27');var a28 = $('#a28');var a29 = $('#a29');
	var a31 = $('#a31');var a32 = $('#a32');var a33 = $('#a33');var a34 = $('#a34');var a35 = $('#a35');var a36 = $('#a36');var a37 = $('#a37');var a38 = $('#a38');var a39 = $('#a39');
	var a41 = $('#a41');var a42 = $('#a42');var a43 = $('#a43');var a44 = $('#a44');var a45 = $('#a45');var a46 = $('#a46');var a47 = $('#a47');var a48 = $('#a48');var a49 = $('#a49');
	var a51 = $('#a51');var a52 = $('#a52');var a53 = $('#a53');var a54 = $('#a54');var a55 = $('#a55');var a56 = $('#a56');var a57 = $('#a57');var a58 = $('#a58');var a59 = $('#a59');
	var a61 = $('#a61');var a62 = $('#a62');var a63 = $('#a63');var a64 = $('#a64');var a65 = $('#a65');var a66 = $('#a66');var a67 = $('#a67');var a68 = $('#a68');var a69 = $('#a69');
	var a71 = $('#a71');var a72 = $('#a72');var a73 = $('#a73');var a74 = $('#a74');var a75 = $('#a75');var a76 = $('#a76');var a77 = $('#a77');var a78 = $('#a78');var a79 = $('#a79');
	var a81 = $('#a81');var a82 = $('#a82');var a83 = $('#a83');var a84 = $('#a84');var a85 = $('#a85');var a86 = $('#a86');var a87 = $('#a87');var a88 = $('#a88');var a89 = $('#a89');
	var a91 = $('#a91');var a92 = $('#a92');var a93 = $('#a93');var a94 = $('#a94');var a95 = $('#a95');var a96 = $('#a96');var a97 = $('#a97');var a98 = $('#a98');var a99 = $('#a99');

	// set arrays for storing rows collumns and cells (3x3)
	// these variables will be used for checking duplicated numbers
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

		$(".bSelected").find("span").removeClass('duplicated-number');
		
		var temp;
		var tRow = rows[selRow-1];
		for (var i = 0; i < rows[selRow-1].length; i++) {
			temp = tRow[i];
			if (!temp.is(selectedBox)) {
			    if (temp.find('span').text() == _num) {
			        // found duplicate number, change font color to red
					temp.find('span').addClass('duplicated-number');
					$(".bSelected").find('span').addClass('duplicated-number');
			    } else {
					temp.find('span').removeClass('duplicated-number');
			    }
			}
		}

	};
	var checkColDuplicates = function(_num) {

		var temp;
		var tCol = cols[selCol-1];
		for (var i = 0; i < cols[selCol-1].length; i++) {
			temp = tCol[i];
			if (!temp.is(selectedBox)) {
			    if (temp.find('span').text() == _num) {
			        // found duplicate number, change font color to red
					temp.find('span').addClass('duplicated-number');
					$(".bSelected").find('span').addClass('duplicated-number');
			    } else {
					temp.find('span').removeClass('duplicated-number');
			    }
			}
		}

	};
	var checkCelDuplicates = function(_num) {

		var temp;
		var tCel = cels[selCel-1];
		for (var i = 0; i < cols[selCel-1].length; i++) {
			temp = tCel[i];
			if (!temp.is(selectedBox)) {
			    if (temp.find('span').text() == _num) {
			        // found duplicate number, change font color to red
					temp.find('span').addClass('duplicated-number');
					$(".bSelected").find('span').addClass('duplicated-number');
			    } else {
					temp.find('span').removeClass('duplicated-number');
			    }
			}
		}

	};
	$(document).on('keyup', function(eve) {
		// console.log("key up ->" + eve.keyCode);

		var keyPressed = eve.keyCode;
		var selN = 0;

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
				selN = '1';
			break;
			case 50:
				selN = '2';
			break;
			case 51:
				selN = '3';
			break;
			case 52:
				selN = '4';
			break;
			case 53:
				selN = '5';
			break;
			case 54:
				selN = '6';
			break;
			case 55:
				selN = '7';
			break;
			case 56:
				selN = '8';
			break;
			case 57:
				selN = '9';
			break;
			case 48:
				selN = '';
			break;
		}

		if (selN !== 0) {
			checkDuplicates(selN);
			$(".bSelected").find("span").text(selN);
		} else {
			$(".bSelected").removeClass('bSelected');
			selectedBox = $('#a'+selRow+selCol);
			$('#a'+selRow+selCol).addClass('bSelected');
		}
	});
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
	};


});







