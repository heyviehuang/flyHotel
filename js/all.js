$(document).ready(function() {
    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#bookNow-date-checkIn, #bookNow-date-checkOut').datepicker();

    var swiper = new Swiper(".index-viewSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
    var swiper = new Swiper(".roomDetails-roomPicSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(scrollPos, windowHeight);
        // animated
        $('.animated-t,.animated-r,.animated-b,.animated-l,.animated-m').each(function() {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });

});