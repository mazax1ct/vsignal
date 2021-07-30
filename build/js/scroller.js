let scrollerSideOffset = 40;
var scroller;

$(document).ready(function() {
    if ($('body').width() >= 1280 && $('body').width() < 1890) {
        scrollerSideOffset = (window.innerWidth - 1280) / 2 + 40;
    }

    if ($('body').width() >= 1890) {
        scrollerSideOffset = (window.innerWidth - 1600) / 2 + 80;
    }

    scroller = new Swiper('.js-scroller', {
        loop: false,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetAfter: 30,
        slidesOffsetBefore: 30,
        watchOverflow: true,

        scrollbar: {
            el: '.js-scroller .swiper-scrollbar',
        },

        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 40
            },
            1280: {
                spaceBetween: 40,
                slidesOffsetAfter: scrollerSideOffset,
                slidesOffsetBefore: scrollerSideOffset
            }
        }
    });
});

$(window).on("resize", function() {
    if ($('body').width() >= 1280 && $('body').width() < 1890) {
        scrollerSideOffset = (window.innerWidth - 1280) / 2 + 40;
        scroller.params.slidesOffsetAfter = scrollerSideOffset;
        scroller.params.slidesOffsetBefore = scrollerSideOffset;
        setTimeout(function() {
            scroller.update();
        }, 100);
    }

    if ($('body').width() >= 1890) {
        scrollerSideOffset = (window.innerWidth - 1600) / 2 + 80;
        scroller.params.slidesOffsetAfter = scrollerSideOffset;
        scroller.params.slidesOffsetBefore = scrollerSideOffset;
        setTimeout(function() {
            scroller.update();
        }, 100);
    }
});
