let scrollerSideOffset = 80;
var scroller;

$(document).ready(function() {
    if ($('body').width() >= 1600) {
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
            1400: {
                spaceBetween: 40,
                slidesOffsetAfter: 80,
                slidesOffsetBefore: 80
            },
            1600: {
                spaceBetween: 40,
                slidesOffsetAfter: scrollerSideOffset,
                slidesOffsetBefore: scrollerSideOffset
            }
        }
    });
});

$(window).on("resize", function() {
    if ($('body').width() >= 1600) {
        scrollerSideOffset = (window.innerWidth - 1600) / 2 + 80;
        scroller.params.slidesOffsetAfter = scrollerSideOffset;
        scroller.params.slidesOffsetBefore = scrollerSideOffset;
        setTimeout(function() {
            scroller.update();
        }, 100);
    }
});
