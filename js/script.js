/* ================= Android stock browser ================= */
$(function() {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
})

/* ================= Script Here ================= */
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 10) {
        $('#header').addClass('dis__transparent');

    } else {
        $('#header').removeClass('dis__transparent');

    }
});


$(document).ready(function() {
    $('#carousel').carousel({
        interval: 2000
    })
    $("#carousel").carousel("cycle");
    // Activate Carousel
    $("#carousel").carousel();

    // Enable Carousel Indicators
    $("#item1").click(function() {
        $("#carousel").carousel(0);
    });
    $("#item2").click(function() {
        $("#carousel").carousel(1);
    });
    $("#item3").click(function() {
        $("#carousel").carousel(2);
    });

    $("#item4").click(function() {
        $("#carousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#carousel").carousel("prev");
    });


    $(".carousel-control-next").click(function() {
        $("#carousel").carousel("next");
    });
});