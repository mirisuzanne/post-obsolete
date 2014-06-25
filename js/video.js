$(function () {
    'use strict';

    // Variables
    // ---------

    var video = $('.sound-and-fury'),
        triggers = [
          { 'time': 11,
            'name': '.start', },
          { 'time': 40,
            'name': '.maintitle', },
          { 'time': 53,
            'name': '.booktitle', },
          { 'time': 62,
            'name': '.youtube', },
          { 'time': 80,
            'name': '.church', },
          { 'time': 87,
            'name': '.magic', },
          { 'time': 101,
            'name': '.wordtitle', },
          { 'time': 133,
            'name': '.bone', },
          { 'time': 151,
            'name': '.definitiontitle', },
          { 'time': 166,
            'name': '.maginot', },
          { 'time': 175,
            'name': '.fan', },
          { 'time': 186,
            'name': '.meaningtitle', },
          { 'time': 200,
            'name': '.snail', },
          { 'time': 215,
            'name': '.pentitle', },
          { 'time': 241,
            'name': '.fountainpen', },
          { 'time': 246,
            'name': '.obsoletetitle', },
          { 'time': 256,
            'name': '.abacus', },
          { 'time': 290,
            'name': '.sorrytitle', },
          { 'time': 308,
            'name': '.lathe', },
          { 'time': 316,
            'name': '.cloudtitle', },
          { 'time': 328,
            'name': '.play', },
          { 'time': 341,
            'name': '.farm', },
          { 'time': 348,
            'name': '.architecturetitle', },
          { 'time': 357,
            'name': '.handshake', },
          { 'time': 382,
            'name': '.ritualtitle', },
          { 'time': 410,
            'name': '.dance', },
          { 'time': 424,
            'name': '.redgreen', },
          { 'time': 521,
            'name': '.dogs', },
          { 'time': 566,
            'name': '.trans', },
        ];


    // Functions
    // ---------

    var instiGATE = function(el) {
      video[0].play();
      $(el).toggleClass('is-gone-forever');
    };

    var i = 0;
    var doIT = function(t) {
      var toDo = false;

      if (triggers[i] && t > (triggers[i]['time'] - 1)) {
        $(triggers[i]['name']).addClass('MOOOVEALONG');
        i = i + 1;
      }
    };

    var redGREEN = function(el) {
     if(video[0].paused) {
        video[0].play();
        $(el).toggleClass('is-gone-forever');
      } else {
        video[0].pause();
      }
      $(el).toggleClass('is-paused');
    };


    // Events
    // ------

    video.on('timeupdate', function(event) {
      var now = parseInt(this.currentTime, 10);
      doIT(now);
      event.preventDefault();
    });

    video.on('ended', function(event) {
      $('.FIN').toggleClass('is-gone-forever');
      event.preventDefault();
    });


    // Controls
    // --------

    $('.instigate').click(function(event) {
      instiGATE(this);
      event.preventDefault();
    });

    $('.redgreen').click(function(event) {
      redGREEN(this);
      event.preventDefault();
    });

});
