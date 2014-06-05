$(function () {
    'use strict';

    $('.instigate').click(function() {
      $('.sound-and-fury').get(0).play();
      $(this).toggleClass('is-gone-forever');
    });
});
