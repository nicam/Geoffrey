$(document).ready(function() {
    $('nav a').on('click', function(event) {
        var e = $(this);
        if(!e.hasClass('plus') && !e.hasClass('bt_black')) {
            var o = $('section a.active'); o = o[0]; o = $(o);
            e.addClass('active');
            o.removeClass('active');
            $('#'+e.attr('data-link')).show();
            $('#'+o.attr('data-link')).hide();

            return false;
        }
    });
});