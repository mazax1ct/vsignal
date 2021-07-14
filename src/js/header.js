//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие меню
$(document).on('click', '.js-menu-toggler', function () {
  var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    if(!$('body').hasClass('compensate-for-scrollbar')) {
      scrollCompensate();
    }
    $('body').addClass('overflow').addClass('menu-open');
    _this.find('use').attr('xlink:href', '#close');
    $('.main-menu').fadeIn();
  } else {
    _this.find('use').attr('xlink:href', '#burger');
    $('body').removeClass('menu-open')
    $('.main-menu').fadeOut('300', function () {
      $('body').removeClass('overflow').removeClass('compensate-for-scrollbar');
      $('#scroll-compensate').remove();
    });
  }
  return false;
});
