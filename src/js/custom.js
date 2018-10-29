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
