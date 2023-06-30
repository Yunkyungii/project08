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

    $('.main_schedule .arrows>*').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })

});




$(function () {
    $('#bg_video').YTPlayer({
        videoURL: 'HtRrnmVB6Wg',
        containment: '.main_video',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_visual .ctr .pause').on('click', function () {
        $('#bg_video').YTPPause();
        $(this).addClass('on').siblings().removeClass('on')
    });
    $('.main_visual .ctr .play').on('click', function () {
        $('#bg_video').YTPPlay();
        $(this).addClass('on').siblings().removeClass('on')
    });

})
