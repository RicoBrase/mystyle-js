'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyStyleJS = function () {
    function MyStyleJS(id) {
        _classCallCheck(this, MyStyleJS);

        this.id = id;
        this.css = "";
    }

    _createClass(MyStyleJS, [{
        key: 'loadCSSfromString',
        value: function loadCSSfromString(css) {
            this.css = css;
            this.applyCSS();
        }
    }, {
        key: 'saveCSS',
        value: function saveCSS(persistent) {
            if (persistent) {
                window.localStorage.setItem(this.id, this.css);
            } else {
                window.sessionStorage.setItem(this.id, this.css);
            }
        }
    }, {
        key: 'loadCSS',
        value: function loadCSS() {
            var session = window.sessionStorage.getItem(this.id);
            var local = window.localStorage.getItem(this.id);

            if (session) {
                this.css = session;
            } else {
                this.css = local;
            }

            this.applyCSS();
        }
    }, {
        key: 'clearCSS',
        value: function clearCSS() {
            if (document.getElementById(this.id)) {
                document.head.removeChild(document.getElementById(this.id));
            }

            window.localStorage.removeItem(this.id);
            window.sessionStorage.removeItem(this.id);
        }
    }, {
        key: 'applyCSS',
        value: function applyCSS() {
            if (document.getElementById(this.id)) {
                document.head.removeChild(document.getElementById(this.id));
            }

            var head = document.head;
            var style = document.createElement('style');
            style.type = 'text/css';
            style.id = this.id;

            if (style.stylesheet) {
                style.stylesheet.cssText = this.css;
            } else {
                style.appendChild(document.createTextNode(this.css));
            }

            head.appendChild(style);
        }
    }]);

    return MyStyleJS;
}();
