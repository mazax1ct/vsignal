$(document).on('click', '.js-hero', function () {
  $('.js-hero').removeClass('is-active');
  $(this).addClass('is-active');
  $('.hero__image img').attr('src', $(this).attr('data-src'));
  $('.hero__image img').attr('srcset', $(this).attr('data-srcset'));
  $('.hero__content h1').html($(this).attr('data-title'));
  return false;
});
