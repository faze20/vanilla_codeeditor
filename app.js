const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');
const html_button = document.querySelector('.html-code')
const css_button = document.querySelector('.css-code')
const js_button = document.querySelector('.js-code')

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}
function changeLanguage(n) {
    if(n === 'css'){
        html_button.classList.add('code-element')
        css_button.classList.remove('code-element')
        js_button.classList.add('code-element')
    } else if( n === 'js'){
        html_button.classList.add('code-element')
        css_button.classList.add('code-element')
        js_button.classList.remove('code-element')
    } else if( n === 'html'){
        html_button.classList.remove('code-element')
        css_button.classList.add('code-element')
        js_button.classList.add('code-element')
    }

}
// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;