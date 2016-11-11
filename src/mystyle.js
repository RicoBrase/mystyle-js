//
// mystyle-js v1.0.0
// (c) 2016 Rico Brase https://github.com/RicoBrase/mystyle-js
// License: MIT
//

const MyStyleJS = class {

    constructor (id) {
        this.id = id;
        this.css = "";
    }

    loadCSSfromString(css) {
        this.css = css;
        this.applyCSS();
    }

    saveCSS(persistent) {
        if(persistent){
            window.localStorage.setItem(this.id, this.css);
        }else{
            window.sessionStorage.setItem(this.id, this.css);
        }
    }

    loadCSS() {
        var session = window.sessionStorage.getItem(this.id);
        var local = window.localStorage.getItem(this.id);

        if(session){
            this.css = session;
        }else{
            this.css = local;
        }

        this.applyCSS();
    }

    clearCSS() {
        if (document.getElementById(this.id)) {
            document.head.removeChild(document.getElementById(this.id));
        }

        window.localStorage.removeItem(this.id);
        window.sessionStorage.removeItem(this.id);
    }

    applyCSS() {
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
}