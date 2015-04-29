$(document).ready(function() {
	generateGrid(16);

	$("#button").click(function() {
		//get new grid dimensions
		var newDimension = prompt("How many squares per row/column?");	
		
		if(newDimension != null) {
			//empty current grid
			$("#container").empty();
			//generate new grid
			generateGrid(newDimension);
		}
	});	
});

var generateGrid = function(numSquares) {
	var squareSize = 400 / numSquares;
	
	for(var i = 0; i < numSquares * numSquares; i++) {
		if(i % numSquares  === 0) {
			$("#container").append("<div class='squares' id='newRow'></div>");
		} else {
			$("#container").append("<div class='squares'></div>");
		}
	}
	
	//adjust squares to fit container
	$(".squares").css("width", squareSize);
	$(".squares").css("height", squareSize);
		
	highlight();
};

var highlight = function() {
	$(".squares").hover(function() {
		$(this).addClass("highlighted");	
	});
};

