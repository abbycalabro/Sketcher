$(document).ready(function() {
	var numSquares = 256;
	for(var i = 0; i < numSquares; i++) {
		if(i % 16 === 0) {
			$("#container").append("<div class='squares' id='newRow'></div>");
		} else {
			$("#container").append("<div class='squares'></div>");
		}
	}
});
