$(document).on('click', '.js-service-toggle', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.service__inner').find('.service__text-block').slideToggle();
  return false;
});
