$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    const scheduleSlide = new Swiper('.schedule_slide', {
        loop: true,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 2000,
        // },
        breakpoints: {
            768: {
                slidesPerView: 3,
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
