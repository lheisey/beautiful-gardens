/*!
 * Custom javascript
 */
new WOW().init();
$(window).scroll(function(){
    if ( $(this).scrollTop() > 10 ){
        $('.navbar-fixed-top').removeClass('head-room');
    } else {
        $('.navbar-fixed-top').addClass('head-room');
    }
});

// top of page
var btn = $('#back-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
        btn.addClass('showbtn');
    } else {
        btn.removeClass('showbtn');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '500', 'linear');
});
