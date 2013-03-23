$(document).ready(function() {
	$(document).on("click", "#results .checkbox", function(){
		$(this).parent().addClass("checked");
		$("#list").append("<div class=\"entry checked\">" + $(this).parent().html() + "</div>");
		$(".checked .plus").remove();
		$("#results .checked").slideUp(500).queue(function(){$("#results .checked").remove()});
	});
	
	$(document).on("click", "#results .entry", function(){
		if(!$(this).hasClass("checked"))
		{
			$(this).addClass("added");
			$(".added .plus").removeClass("plus").addClass("minus").html("-");
			$("#list").append("<div class=\"entry\">" + $(this).html() + "</div>");
			$("#results .added").slideUp(500).queue(function(){$("#results .added").remove()});
		}
	});
	
	$(document).on("click", "#list .entry", function(){
			$(this).toggleClass("checked");
	});
});