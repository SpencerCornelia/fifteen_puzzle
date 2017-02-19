window.onload = initPage;

function initPage() {
	var table = document.getElementById("puzzleGrid");
	var cells = table.getElementsByTagName("td");
	for (var i = 0; i < cells.length; i++) {
		var cell = cells[i];
		cell.onclick = tileClick;
	}
}

function tileClick() {
	if (cellIsEmpty(this)) {
		alert("Please click on a numbered tile!");
		return;
	}
	//check above
	if (currentRow > 1) {
		var testRow = Number(currentRow) - 1;
		var testCellId = "cell" + testRow + currentCol;
		var testCell = document.getElementById(testCellId);
		if (cellIsEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}
	}

	//check below
	if (currentRow < 4) {
		var testRow = Number(currentRow) + 1;
		var testCellId = "cell" + testRow + currentCol;
		var testCell = document.getElementById(testCellId);
		if (cellIsEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		} 
	}

	//check to the left
	if (currentCol > 1) {
		var testCol = Number(currentCol) - 1;
		var testCellId = "cell" + currentRow + testCol;
		var testCell = document.getElementById(testCellId);
		if (cellIsEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}
	}

	//check to the right
	if (currentCol < 4) {
		var testCol = Number(currentCol) + 1;
		var testCellId = "cell" + currentRow + testCol;
		var testCell = document.getElementById(testCellId);
		if (cellIsEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		} 
	}
}

var currentRow = this.id.charAt(4);
var currentCol = this.id.charAt(5);

function cellIsEmpty(cell) {
	var image = cell.firstChild;
	if (image.alt == "empty") {
		return true;
	} else {
		return false;
	}
}

function swapTiles(selectedCell, destinationCell) {
	selectedImage = selectedCell.firstChild;
	destinationImage = destinationCell.firstChild;
	selectedCell.appendChild(destinationImage);
	destinationCell.appendChild(selectedImage);
}