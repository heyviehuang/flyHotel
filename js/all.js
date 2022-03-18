$(document).ready(function() {
    $('.navCourse').click(function(event) {
        event.preventDefault();
        // $('.navCourse').toggleClass('active');
        $('.navCourseList').stop().slideToggle(300);
    });

    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    // var swiper = new Swiper('.banner-swiper', {
    //     spaceBetween: 300,
    //     centeredSlides: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

    // var swiper = new Swiper('.index-view-swiper', {
    //     spaceBetween: 20,
    //     centeredSlides: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});