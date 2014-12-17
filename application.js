$(document).ready(function() {
	$("#abouttext").hide();
	$("#wordtext").hide();
	$("#soundtext").hide();
});

//fades
$(document).ready(function() {
	$("#headlinelink").on("click",function(){
		$("#abouttext").fadeOut("slow");
		$("#wordtext").fadeOut("slow");
		$("#soundtext").fadeOut("slow");
	});
});

$(document).ready(function() {
	$("#aboutlink").on("click",function(){
		$("#abouttext").fadeIn("slow");
		$("#wordtext").hide();
		$("#soundtext").hide();
	});
});

$(document).ready(function() {
	$("#wordlink").on("click",function(){
		$("#abouttext").hide();
		$("#wordtext").fadeIn("slow");
		$("#soundtext").hide();
	});
});

$(document).ready(function() {
	$("#soundlink").on("click",function(){
		$("#abouttext").hide();
		$("#wordtext").hide();
		$("#soundtext").fadeIn("slow");
	});
});

//hover 
$("#aboutbox").hover(function(){
  $("#aboutbox").css("background-color","#e5e5e5");
   },function(){
  $("#aboutbox").css("background-color","#FFFFFFF");
});

$("#wordbox").hover(function(){
  $("#wordbox").css("background-color","#e5e5e5");
   },function(){
  $("#wordbox").css("background-color","#FFFFFFF");
});


$("#soundbox").hover(function(){
  $("#soundbox").css("background-color","#e5e5e5");
   },function(){
  $("#soundbox").css("background-color","#FFFFFFF");
});

$("#resumebox").hover(function(){
  $("#resumebox").css("background-color","#e5e5e5");
   },function(){
  $("#resumebox").css("background-color","#FFFFFFF");
});

//click

$(".box").click(function() {
   $(".box").removeClass("active");  // remove active class from all
   $(this).addClass("active");         // add active class to clicked
});