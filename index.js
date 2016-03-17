var style = require('./index.css');
var headerEle = document.getElementById('header');
var titleEle = document.getElementById('title');
var textEle = document.getElementById('text');

headerEle.innerHTML = '<div class="'+ style.titlePixnet +'">PIXNET</div>';
titleEle.innerHTML = '<div class="'+ style.titleF2e +'">PIXNET F2E</div>';
textEle.innerHTML = '<div class="text">台灣最大社群網站及內容創作平台，以提供免費相簿與部落格服務為主，擁有優質的社群內容。</div>';