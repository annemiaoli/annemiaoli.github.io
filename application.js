$(document).ready(function() {
	$("#produce-list").hide();
	$("#report-list").hide();
	$("#count-list").hide();
	
//fades

	$("#jumbotron").on("click",function(){
		$("#produce-list").slideUp("fast");
		$("#report-list").slideUp("fast");
		$("#count-list").slideUp("fast");
		$(".verbs").removeClass("active");
	});

	$("#produce").on("click",function(){
		$("#produce-list").slideToggle("fast");
		$("#report-list").hide();
		$("#count-list").hide();
	});

	$("#report").on("click",function(){
		$("#produce-list").hide();
		$("#report-list").slideToggle("fast");
		$("#count-list").hide();
	});

	$("#count").on("click",function(){
		$("#produce-list").hide();
		$("#report-list").hide();
		$("#count-list").slideToggle("fast");
	});

	$(".verbs").on("click",function(){
	  $(this).toggleClass("active");            //adds active class to specific verb
	  $(this).siblings().removeClass("active"); //looks for this' sibblings and removes active classes from them 
	});
});

