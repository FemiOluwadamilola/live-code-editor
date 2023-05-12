const html_code = document.querySelector(".html-code textarea"),
  css_code = document.querySelector(".css-code textarea"),
  js_code = document.querySelector(".js-code textarea"),
  result = document.querySelector("#result");

const run = () => {
  //   localStorage.setItem("html_code", html_code.value);
  //   localStorage.setItem("css_code", css_code.value);
  //   localStorage.setItem("js_code", js_code.value);
  result.contentDocument.body.innerHTML =
    `<style>${css_code.value}</style>` + html_code.value;
  result.contentWindow.eval(js_code.value);
};

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// html_code.value = localStorage.html_code;
// css_code.value = localStorage.css_code;
// js_code.value = localStorage.js_code;
