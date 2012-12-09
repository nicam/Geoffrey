$(document).ready(function() {
	$('div.head').on('click', function(event) {
		var e = $(this).parent();
		var o = e.find('div.order'); o = o[0]; o = $(o);
		if(!e.hasClass('active')) {
			e.addClass('active');
			o.show();
		}
		else {
			e.removeClass('active');
			o.hide();
		}
	});
	$('form').on('submit', function(event) {
        event.preventDefault();
		var e = $(this);
        e.parent().parent().parent().hide();
	});
});