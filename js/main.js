$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    $('.header .gnb>ul>li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
    })

    const scheduleSlide = new Swiper('.schedule_slide', {
        loop: true,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 2000,
        // },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });

    $('.main_schedule .arrows .prev').on('click', function () {
        scheduleSlide.slidePrev();
    });
    $('.main_schedule .arrows .next').on('click', function () {
        scheduleSlide.slideNext();
    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        // autoplay: {
        //     delay: 2000,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});




$(function () {
    $('#bg_video').YTPlayer({
        videoURL: 'HtRrnmVB6Wg',
        containment: '.main_video',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_visual .pause').on('click', function () {
        $('#bg_video').YTPPause();
    });
    $('.main_visual .play').on('click', function () {
        $('#bg_video').YTPPlay();
    });
})
