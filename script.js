$(document).ready(function() {
	var newDimension = 16;
	generateGrid(newDimension);
	animateDiv();

	$("#new").click(function() {
		//get new grid dimensions
		newDimension = prompt("What dimension should the new grid be? Enter an integer between 1 and 100: ");	
		newDimension = Number(newDimension);

		//check that input is acceptable type and size
		if(typeof newDimension === "number" && (newDimension % 1) === 0) {
			if(newDimension > 0 && newDimension <=100) { 
				//empty current grid
				$("#container").empty();
				//generate new grid
				generateGrid(newDimension);
			}
			else {
				alert("Oops! You didn't enter an integer between 1 and 100.");
			}
		}
		else {
			alert("Oops! You didn't enter an integer between 1 and 100.");
		}
	});
	
	$("#clear").click(function() {
		$(".squares").css("background", "black");
	});	
});

var generateGrid = function(numSquares) {
	var squareSize = (400 / numSquares).toFixed(10);
	
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
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background", newColor);	
	});
};

//img functions
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
    var oldq = $('#abby').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#abby').animate({ top: newq[0], left: newq[1] }, speed, function(){
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
