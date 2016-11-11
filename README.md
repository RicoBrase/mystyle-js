# mystyle-js

mystyle-js is a simple and lightweight JavaScript library, which enables developers to let their website visitors apply a custom css stylesheet.

## Installation

1. Download the [latest release](https://github.com/RicoBrase/mystyle-js/releases)
2. Drop either the production version (`dist/mystyle.min.js`) or the non-minified development version (`dist/mystyle.js`) into your project folder
3. Link it in your HTML code (e.g. '<script src="../js/mystyle.min.js"></script>`)
4. Done!

## Usage

The developer needs to implement his own method of getting the css stylesheet from his users, one method using JavaScripts [`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) class is shown in the [demo](https://github.com/RicoBrase/mystyle-js/tree/master/demo).

To be able to use mystyle-js, you need to initialize a new mystyle-js object:

```html
<script src="../js/mystyle.min.js"></script>

<script>
    var mystyle = new MyStyleJS('your-css-id');
</script>
```

* Note: `your-css-id` is just a regular HTML element id, used to identify the added stylesheet later on. This can be any valid HTML id of your choice.

Then you need to load your CSS stylesheet. mystyle-js comes with two different methods to do this.

1. Loading the stylesheet from a string (e.g. a read file)
2. Load the stylesheet from the page's `window.localStorage` or `window.sessionStorage` ([Webstorage API](http://www.w3schools.com/html/html5_webstorage.asp))

## Documentation

#### MyStyleJS(id: string)
Constructor of the MyStyleJS class.

- `id` is a HTML id applied to the loaded stylesheet for later recognition.
    + This is used as the content of a `id=""` attribute.

###### Example:
```javascript
var mystyle = new MyStyleJS('customstyle-example');
```

#### loadCSSfromString(css: string)
Loads a css stylesheet from the `css` parameter.

- `css` is a css stylesheet as plaintext

###### Example:
```javascript
mystyle.loadCSSfromString("body { background-color: red; }");
```

#### saveCSS(persistent: boolean)
Saves the loaded css from the `MyStyleJS` instance to the users `WebStorage`.

- `persistent` defines the saving location of the css stylesheet.
    + If `true`, the data will be saved to the `localStorage` and will be kept until it's manually deleted.
    + If `false`, the data will be saved to the `sessionStorage` and will be deleted, if the browser (or tab) is closed.

###### Example:
```javascript
mystyle.loadCSSfromString("body { background-color: green;}");
mystyle.saveCSS(true):
```

#### loadCSS()
Loads any saved css stylesheets from the users `WebStorage`, prioritizing the (non-persistent) `sessionStorage`.

###### Example:
```javascript
mystyle.loadCSS();
```

#### clearCSS()
Removes any loaded custom css stylesheets from the website **and** from the users `WebStorage`.

###### Example:
```javascript
mystyle.clearCSS();
```

#### applyCSS()
Actually applies the css stylesheet to the website, if css was loaded manually.
> Note: `loadCSSfromString(css: string)` already calls `applyCSS()`, another call is not needed in this case.

###### Example:
```javascript
mystyle.css = "body { background-color: blue; }";
mystyle.applyCSS();
```

## License
[This project is licensed under the MIT License.](LICENSE.md)