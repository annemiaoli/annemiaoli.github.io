$(document).ready(function() {
	$("#write-list").hide();
	$("#listen-list").hide();
	$("#count-list").hide();
	
//fades

	$("#jumbotron").on("click",function(){
		$("#write-list").slideUp("fast");
		$("#listen-list").slideUp("fast");
		$("#count-list").slideUp("fast");
		$(".verbs").removeClass("active");
	});

	$("#write").on("click",function(){
		$("#write-list").slideToggle("fast");
		$("#listen-list").hide();
		$("#count-list").hide();
	});

	$("#listen").on("click",function(){
		$("#write-list").hide();
		$("#listen-list").slideToggle("fast");
		$("#count-list").hide();
	});

	$("#count").on("click",function(){
		$("#write-list").hide();
		$("#listen-list").hide();
		$("#count-list").slideToggle("fast");
	});

	$(".verbs").on("click",function(){
	  $(this).toggleClass("active");
	  $(this).siblings().removeClass("active");
	});
});

