document.addEventListener("DOMContentLoaded",function(){
	var num = document.getElementById("score").innerHTML.replace(/[A-Z]+/, '');
	var score = parseInt(num);

	function changeScore(action){
		score = (action === "increase") ? (score +  5) : (score - 5);
		if (score <= 0) { score = 0; }
		document.getElementById("score").innerHTML = score + ' Points';
	}

	
	function setScore() {
		var input  = parseInt(document.getElementById("custom-score").value);
		if (!isNaN(input)) {
			score = parseInt(document.getElementById("custom-score").value);
			document.getElementById("score").innerHTML = score  + ' Points'
		}
		else {
			document.getElementById("score").innerHTML = '0 Points';
		}
	}


	document.getElementById("increase-5").addEventListener("click", function() {
		changeScore('increase');
	});

	document.getElementById("decrease-5").addEventListener("click", function() {
		changeScore('decrease');
	});
	document.getElementById("submit-custom-score").addEventListener("click", function() {
		setScore();
	});
});