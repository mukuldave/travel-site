$(document).ready(function() {
	$('.bxslider').bxSlider ({
		mode: 'fade',
		auto: true
});
});


$('.menu-togglr').on('click',function () {
	
	$('#mainav').slideToggle('fast');
	$(this).toggleClass('active');
});

$(document).ready(function() {
	$('#ist').fadeIn(4000);
});
$(document).ready(function() {
	$('#iist').fadeIn(4000);
});

