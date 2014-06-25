$(function () {
    'use strict';

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
