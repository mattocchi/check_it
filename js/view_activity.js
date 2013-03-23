$(document).ready(function() {
	$("#activity").focus(function(){
		$("#activity").val("");
		$("#activity").css("color", "#684A3D");
		$("#activity").css("text-transform", "uppercase");
		if(!$("#list").is(":visible"))
			$("#results").slideDown(500);
	});
	
	$("#activity").blur(function(){
		if(!$("#activity").val())
		{
			$("#activity").val($("#activity").attr("aria-label"));
			$("#activity").css("color", "rgba(104,74,61,0.57)");
			$("#activity").css("text-transform", "lowercase");
		}
	});
	
	$(document).on("click", ".activity", function(){
		$("#activity").css("color", "rgba(104,74,61,0.57)");
		$("#activity").css("text-transform", "lowercase");
		$("#activity").attr("aria-label", "what do you need?");
		$("#activity").val($("#activity").attr("aria-label"));
		$("#results").slideUp(500, function(){$(".activity").remove().queue(function(){getEntry($(this).attr("id")); $("#results").slideDown(500);})});
		$("#arrow, .label").slideDown(500);
		var lunghezza = $("h1").html().length;
		cancella($(this).html().toLowerCase());
	});
});