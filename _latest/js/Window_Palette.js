"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

    Class Window

 */

var Window_Palette = function () {
    function Window_Palette(config) {
        _classCallCheck(this, Window_Palette);

        this.id = "window-" + $('div[id^="window-"]').length;
        this.title = config.title;
        this.resizable = false;
        this.type = "colors";
        this.left = config.left;
        this.top = config.top;
        this.width = "auto";
        this.height = "auto";
        this.position = { at: "left+" + this.left + " top+" + this.top };
        this.resizable = true;
        this.create_window();
    }

    _createClass(Window_Palette, [{
        key: "create_window",
        value: function create_window() {
            $("#app").append("<div id='" + this.id + "' class='" + this.type + "' title='" + this.title + "'></div>");
            $("#" + this.id).dialog({
                width: this.width,
                height: this.height,
                dialogClass: "no-close",
                position: this.position,
                resizable: this.resizable,
                buttons: this.buttons
            });
        }
    }]);

    return Window_Palette;
}();