function getEntry(idActivity)
{
	$("#results").html("");
	var url = "http://vm.attocchi.it:80/Hackaton101/activities/" + idActivity + "/entries/";
	var get = $.get(url, function(data){
		$.each(data, function(i, item){
			$("#results").append("<div class=\"entry\" id=\"" + item.id + "\"><div class=\"checkbox\"></div>" + item.name + "<a class=\"plus\">+</a></div>");
		});
		$("#results").slideDown(500);
	});
	
	$("#activity").attr("rel", idActivity);
}