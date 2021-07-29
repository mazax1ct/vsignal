$(document).on('mouseenter click', '.js-hero', function () {
  $('.js-hero').removeClass('is-active');
  $(this).addClass('is-active');
  $('#rotate').removeClass().addClass($(this).attr('data-rotate'));
  $('.js-clip-image').attr('xlink:href', $(this).attr('data-src'));
  //$('.hero__content h1').html($(this).attr('data-title'));
  /*clearInterval(timerId);
  timerId = setInterval(function() {
    changeSlide();
  }, 5000);*/
  return false;
});

/*if($('body').width() > 1199) {
  let parallax = document.querySelector('.js-mouse-parallax');

  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / (window).innerWidth;
      let y = e.clientY / window.innerHeight;
      parallax.style.transform = 'translate(' + x * 70 + 'px, ' + y * 70 + 'px)';
  });
}*/

function changeSlide () {
  var current = $('.js-hero.is-active');
  if(current.next().length > 0) {
    current.next().addClass('is-active');
    current.removeClass('is-active');
    $('.js-clip-image').attr('xlink:href', current.next().attr('data-src'));
    $('#rotate').removeClass().addClass(current.next().attr('data-rotate'));
  } else {
    $('.js-hero').removeClass('is-active');
    $('.js-hero').eq(0).addClass('is-active');
    $('.js-clip-image').attr('xlink:href', $('.js-hero').eq(0).attr('data-src'));
    $('#rotate').removeClass().addClass($('.js-hero').eq(0).attr('data-rotate'));
  }
}

/*let timerId = setInterval(function() {
  changeSlide();
}, 5000);*/
