$(document).ready(function() {
    var swiper = new Swiper(".bannerSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var mm = window.matchMedia("(max-width: 768px)");
    mm.addListener(resizeWidth);
    resizeWidth(mm);

    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {
            var swiper = new Swiper(".index-viewSwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: true,
            });
            var swiper = new Swiper(".roomDetails-roomPicSwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: true,
            });
        } else {
            var swiper = new Swiper(".index-viewSwiper", {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: true,
            });
            var swiper = new Swiper(".roomDetails-roomPicSwiper", {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: true,
            });
        }
    }

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

    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.navList-btn-login').click(function(event) {
        event.preventDefault();
        $('.login-window').toggleClass('login-window-fadeIn');
    });

    $('.btnClose').click(function(event) {
        event.preventDefault();
        $('.login-window').removeClass('login-window-fadeIn');
    });

    function showBtnCondition() {
        if ($(this).scrollTop() > 1200) {
            $('.btnTop').fadeIn();
        } else {
            $('.btnTop').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);

    $('#bookNow-date-checkIn, #bookNow-date-checkOut').datepicker();
});