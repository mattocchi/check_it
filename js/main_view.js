function cancella(parola)
{
	$("h1").html($("h1").html().substring(0, $("h1").html().length - 1));
	if($("h1").html().length != 0)
		setTimeout("cancella('" + parola + "')", 100);
	else
	{
		scrivi(parola);
	}
}

function scrivi(parola)
{
	$("h1").html($("h1").html() + parola.substring(0, 1));
	parola = parola.substring(1, parola.length);
	if(parola.length != 0)
		setTimeout("scrivi('" + parola + "')", 100);
}

$(document).ready(function() {
	$("h1").delay(200).fadeIn(1200).delay(200).animate({ 'marginTop': '0.5em' }, 1200).queue(function(){$("#activity").fadeIn(1200)});
});