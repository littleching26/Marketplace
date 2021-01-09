$(document).ready(function () {
    var resizeTimeout;
    $('#logoNav').height($(window).height() * 0.07);
    $('#logoImg').height($(window).height() * 0.1);
    $('#logoAudio').height($(window).height() * 0.06);
    $(window).resize(function () {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(function () {
            $('#logoNav').height($(window).innerHeight() * 0.07);
            $('#logoImg').height($(window).innerHeight() * 0.1);
            $('#logoAudio').height($(window).innerHeight() * 0.06);
        }, 100);
    })
})