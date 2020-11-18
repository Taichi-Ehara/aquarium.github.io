$(function() {
  $('#menuButton').click(function() {
    if ($('.icon').hasClass('close')) {
      $('.icon').removeClass('close');

      $('.hide-menu-wrapper').animate({

        'margin-right': '-300px'

      }, 200, 'swing');

    } else {
      $('.icon').addClass('close');

      $('.hide-menu-wrapper').animate({

        'margin-right': '0'

      }, 200, 'swing');
    }
  });

  $('header a, footer a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop' : position
    }, 500);
  });
});
