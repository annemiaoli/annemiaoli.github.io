$(document).ready(function() {
	$("#numbertext").hide();
	$("#wordtext").hide();
	$("#soundtext").hide();


//fades

	$("#headline").on("click",function(){
		$("#numbertext").fadeOut("slow");
		$("#wordtext").fadeOut("slow");
		$("#soundtext").fadeOut("slow");
	});

	$("#numberlink").on("click",function(){
		$("#numbertext").fadeIn("slow");
		$("#wordtext").hide();
		$("#soundtext").hide();
	});

	$("#wordlink").on("click",function(){
		$("#numbertext").hide();
		$("#wordtext").fadeIn("slow");
		$("#soundtext").hide();
	});

	$("#soundlink").on("click",function(){
		$("#numbertext").hide();
		$("#wordtext").hide();
		$("#soundtext").fadeIn("slow");
	});

//hover 
	$("#numberbox").hover(function(){
	  $("#numberbox").css("background-color","#cecece");
	   },function(){
	  $("#numberbox").css("background-color","#FFFFFFF");
	});

	$("#wordbox").hover(function(){
	  $("#wordbox").css("background-color","#cecece");
	   },function(){
	  $("#wordbox").css("background-color","#FFFFFFF");
	});


	$("#soundbox").hover(function(){
	  $("#soundbox").css("background-color","#cecece");
	   },function(){
	  $("#soundbox").css("background-color","#FFFFFFF");
	});

	$("#resumebox").hover(function(){
	  $("#resumebox").css("background-color","#cecece");
	   },function(){
	  $("#resumebox").css("background-color","#F0F8FF");
	});

//click

	$(".box").click(function() {
	   $(".box").removeClass("active");  // remove active class from all
	   $(this).addClass("active");         // add active class to clicked
	});
});