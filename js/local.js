$(function () {
    'use strict';

    var video = $('.sound-and-fury');

    $('.instigate').click(function() {
      video[0].play();
      $(this).toggleClass('is-gone-forever');
      return false;
    });

    $('.redgreen').click(function() {
      if(video[0].paused) {
        video[0].play();
        $(this).toggleClass('is-gone-forever');
      } else {
        video[0].pause();
      }
      $(this).toggleClass('is-paused');
      return false;
    });

    video[0].addEventListener('ended', function(event) {
      $('.FIN').toggleClass('is-gone-forever');
    }, false);

    var triggers = {
      '.start': 11,
      '.maintitle': 40,
      '.booktitle': 53,
      '.youtube': 62,
      '.church': 80,
      '.magic': 87,
      '.wordtitle': 101,
      '.bone': 133,
      '.definitiontitle': 151,
      '.maginot': 166,
      '.fan': 175,
      '.meaningtitle': 186,
      '.snail': 200,
      '.pentitle': 215,
      '.fountainpen': 241,
      '.obsoletetitle': 246,
      '.abacus': 256,
      '.sorrytitle': 290,
      '.lathe': 308,
      '.cloudtitle': 316,
      '.play': 328,
      '.farm': 341,
      '.architecturetitle': 348,
      '.handshake': 357,
      '.ritualtitle': 382,
      '.dance': 410,
      '.redgreen': 424,
      '.dogs': 521,
      '.trans': 566,
    };

    var old = 'none';

    video[0].addEventListener('timeupdate', function(event) {
      var now = parseInt(this.currentTime, 10);
      doIT(now);
    }, false);

    function doIT(t){
      var toDo = 'none';

      $.each(triggers, function( key, value ){
        if (t > (value - 1)) { toDo = key; }
      });

      if (old != toDo) {
        $(toDo).addClass('MOOOVEALONG');
        old = toDo;
        delete triggers[toDo];
      }
    }

    // Store keycode variables for easier readability
    var keycodes = {
        SPACE: 32,
        ENTER: 13,
        TAB: 9,
        ESC: 27,
        BACKSPACE: 8,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        CAPS: 20,
        PERIOD: 190,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
    };

    var radios = $('input[type="radio"][name="slide-toggles"]');

    $(document).on('keydown', function (e) {
        var pageUp = e.keyCode === keycodes.PAGE_UP;
        var pageDown = e.keyCode === keycodes.PAGE_DOWN;
        var left = (e.keyCode === keycodes.LEFT ||
            e.keyCode === keycodes.UP) &&
            !radios.filter(':focus').length;
        var right = (e.keyCode === keycodes.RIGHT ||
            e.keyCode === keycodes.DOWN) &&
            !radios.filter(':focus').length;
        if (left || right || pageUp || pageDown) {
            var selected = radios.filter(':checked');
            var selectedIndex = radios.index(selected);
            var newRadio;
            if ((left || pageUp) && selectedIndex > 0) {
                newRadio = radios.eq(selectedIndex - 1);
                if (newRadio.length) {
                    newRadio.prop('checked', true);
                    e.preventDefault();
                }
            }
            if ((right || pageDown) && selectedIndex !== -1) {
                newRadio = radios.eq(selectedIndex + 1);
                if (newRadio.length) {
                    newRadio.prop('checked', true);
                    e.preventDefault();
                }
            }
        }
    });

});
