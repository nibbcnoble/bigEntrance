// Fade in
// stretch in horizontal/vertical
// shrink in horizontal/vertical
var be = { };
var beSettings = {
	speed: 1200
}

$(document).ready(function() {
	bigEntranceSetup();	
});

$(window).scroll(function() {
	checkBe();
});

function bigEntranceSetup() {
	$(".bigEntrance").each(function() {
		if ($(this).hasClass('fade')) {
			be[$(this).attr('id')]= 'fade';	
			$(this).hide();
		}
		if ($(this).hasClass('vStretch')) {
			be[$(this).attr('id')]= 'vStretch';	
			$(this).hide();
			var valueFactor = $(this).css("height");
			$(this).css("height","0px");
			$(this).css("margin-bottom",valueFactor);
		}
		if ($(this).hasClass('hStretch')) {
			be[$(this).attr('id')]= 'hStretch';	
			$(this).hide();
			var valueFactor = $(this).css("height");
			$(this).css("width","0px");
			$(this).css("marginRight",valueFactor);
		}
	});
	checkBe();
	return true;
}
function beEffect(key, type) {
	switch (type) {
		case 'fade':
			$('#'+key).fadeIn(beSettings.speed);
		break;
		case 'vStretch':
			$('#'+key).show();
			var valueFactor = $('#'+key).css("marginBottom");
			$('#'+key).animate({height: valueFactor, marginBottom: "0"},beSettings.speed);
		break;	
		case 'hStretch':
			$('#'+key).show();
			var valueFactor = $('#'+key).css("marginRight");
			$('#'+key).animate({width: valueFactor, marginRight: "0"},beSettings.speed);
		break;		
	}
}

function checkBe() {
	var scrollBottom = $(window).scrollTop() + $(window).height();
	for (var key in be) {
		var offset = $('#'+key).offset();
		if((scrollBottom > offset.top) && $('#'+key).css('display')== 'none') {
			beEffect(key, be[key]);
			console.log('triggered');
    	}
	}	
}
