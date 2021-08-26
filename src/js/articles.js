$(document).on('mouseenter focusin', '.article__image-toggler', function () {
  $(this).parent('.article__image-togglers').find('.article__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.article__picture-block').find('img').attr('src', $(this).attr('data-srcmob'));
  $(this).closest('.article__picture-block').find('img').attr('srcset', $(this).attr('data-srcsetmob'));
  $(this).closest('.article__picture-block').find('source').attr('srcset', $(this).attr('data-srcset'));
  return false;
});
