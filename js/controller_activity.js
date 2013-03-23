$(document).ready(function(){
	get = $.ajax();
	$('#activity').keyup(function(){
		if($("#activity").attr("rel") == "activities")
		{
			if(get)
				get.abort();
			$("#results").html("");
			var url = "http://vm.attocchi.it:80/Hackaton101/activities/search?q=" + $("#activity").val();
			var get = $.get(url, function(data){
				$.each(data, function(i, item){
					$("#results").append("<div class=\"activity\" id=\"" + item.id + "\">" + item.name + "</div>");
				});
			});
		}
		else
		{
			if(get)
				get.abort();
			$("#results").html("");
			var url = "http://vm.attocchi.it:80/Hackaton101/activities/" + $("#activity").attr("rel") + "/entries/search?q=" + $("#activity").val();
			var get = $.get(url, function(data){
				$.each(data, function(i, item){
					$("#results").append("<div class=\"entry\" id=\"" + item.id + "\"><div class=\"checkbox\"></div>" + item.name + "<a class=\"plus\">+</a></div>");
				});
			});
		}
	});
});