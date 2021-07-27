var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

  if ( scrolled > $('.header').height() ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

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
		setTimeout(function() {
    	$('.main-menu').fadeIn();
		}, 300);
  } else {
    _this.find('use').attr('xlink:href', '#burger');
    $('.main-menu').fadeOut('300', function () {
      $('body').removeClass('overflow').removeClass('compensate-for-scrollbar');
      $('#scroll-compensate').remove();
			$('body').removeClass('menu-open');
    });
  }
  return false;
});
