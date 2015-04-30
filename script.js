$(document).ready(function() {
	var newDimension = 16;
	generateGrid(newDimension);
	animateDiv();

	$("#new").click(function() {
		//get new grid dimensions
		newDimension = prompt("How many squares per row/column?");	
		
		if(newDimension != null) {
			//empty current grid
			$("#container").empty();
			//generate new grid
			generateGrid(newDimension);
		}
	});
	
	$("#clear").click(function() {
		$("#container").empty();
		generateGrid(newDimension);
	});	
});

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#random').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#random').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
};

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.15;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}

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

