$(document).ready(function() {
	$("#NBNList").hide();
	$("#NBNIntro").hide();
});

$(document).ready(function() {
	$("#headlinelink").live("click",function(){
		$("#NBNList").fadeOut("slow");
		$("#NBNIntro").fadeOut("slow");
	});
});

$(document).ready(function() {
	$("#NBNLink").live("click",function(){
		$("#NBNList").slideToggle("fast");
		$("#NBNIntro").slideToggle("fast");
	});
});