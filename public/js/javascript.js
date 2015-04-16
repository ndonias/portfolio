$("document").ready(function () {
    $("a.button").fancybox();
});

function startLightBox(){
	var lbBg = document.getElementById("lightBoxBg");
	var lb = document.getElementById("lightBox");

	lgBg.style.display = "block";
	lb.style.display = "block";
}

function dismiss() {
	var lbBg = document.getElementById("lightBoxBg");
	var lb = document.getElementById("lightBox");

	lgBg.style.display = "none";
	lb.style.display = "none";
}