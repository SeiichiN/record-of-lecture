'use strict';

// const lang = document.querySelector('html').lang;
const lang = document.getElementsByTagName('html')[0].lang;

switch (lang) {
  case 'ja':
    document.querySelector('option[value="index.html"]').selected = true;
    break;
  case 'en':
    document.querySelector('option[value="index-en.html"]').selected = true;
    break;
  case 'zh':
    document.querySelector('option[value="index-zh.html"]').selected = true;
    break;
}

document.getElementById('form').selectname.onchange = function() {
  location.href = document.getElementById('form').selectname.value;
  // location.href = 'https://www.yahoo.co.jp';
}