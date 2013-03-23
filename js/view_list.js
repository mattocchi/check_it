$(document).ready(function() {
	$(document).on("click", "#arrow", function(){
		if($("#results").is(":visible"))
		{
			var result = $("#results").html();
			$("#results").slideUp(500).queue(function(){$("#results").remove().queue(function(){
				$(".wrapper").append("<div id=\"results\">" + result + "</div>");
				$("#results").hide();
			}); $("#list .entry").show(); $("#list").slideDown(500);});
			$(".label").html("your list");
			$("#arrow").html("-> view all results <-");
			$("#activity").css("color", "rgba(104,74,61,0.57)");
			$("#activity").css("text-transform", "lowercase");
			$("#activity").attr("aria-label", "what do you need?");
			$("#activity").val($("#activity").attr("aria-label"));
		}
		else
		{
			var list = $("#list").html();
			$("#list").slideUp(500).queue(function(){$("#list").remove().queue(function(){
				$(".wrapper").append("<div id=\"list\">" + list + "</div>");
				$("#list").hide();
			}); $("#results").slideDown(500)});
			$(".label").html("all result");
			$("#arrow").html("-> view your list <-");
			$("#activity").css("color", "rgba(104,74,61,0.57)");
			$("#activity").css("text-transform", "lowercase");
			$("#activity").attr("aria-label", "search on your list!");
			$("#activity").val($("#activity").attr("aria-label"));
		}
	});
});