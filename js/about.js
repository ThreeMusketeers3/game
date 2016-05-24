window.onload = function() {
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var test1 = document.getElementsByClassName("test1");
	var test2 = document.getElementsByClassName("test2");
	var tesb = document.getElementsByClassName("tesb");
	var time = 0;
	left.onclick = function() {
		if (test1[0].style.display == "block") {
			test1[0].style.display = "none";
			test2[0].style.display = "block"
		} else {
			test2[0].style.display = "none";
			test1[0].style.display = "block";
		}
	}
	right.onclick = function() {
		if (test1[0].style.display == "block") {
			test1[0].style.display = "none";
			test2[0].style.display = "block"
		} else {
			test2[0].style.display = "none";
			test1[0].style.display = "block";
		}
	}
	time = setInterval(right.onclick, 2000);
	tesb[0].onmouseover = function() {
		clearInterval(time);
	}
	tesb[0].onmouseout = function() {
		time = setInterval(right.onclick, 2000);
	}
}