/*************************
 *  Iniciar WOW
 **************************/

new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 70, // Integer. How far to offset the scrolling anchor location in pixels

});

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});
