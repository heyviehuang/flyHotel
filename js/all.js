$(document).ready(function() {
    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#bookNow-date-checkIn, #bookNow-date-checkOut').datepicker();
    // $('#bookNow-date-numOfPeople').selectmenu();

    var swiper = new Swiper('.banner-swiper', {
        spaceBetween: 300,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.index-view-swiper', {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});