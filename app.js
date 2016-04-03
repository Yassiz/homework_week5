
document.addEventListener("DOMContentLoaded",function(){
	var num = document.getElementById("score").innerHTML.replace(/[A-Z]+/, '');
	var score = parseInt(num);

	function changeScore(action){
		score = (action === "increase") ? (score +  1) : (score - 1);
		if (score <= 0) { score = 0; }
		document.getElementById("score").innerHTML = score + ' Points';
	}

	
	function setScore() {
		var input  = parseInt(document.getElementById("custom-score").value);
		if (!isNaN(input)) {
			document.getElementById("score").innerHTML = parseInt(document.getElementById("custom-score").value) + ' Points';
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