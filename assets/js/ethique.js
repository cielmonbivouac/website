var togglelien = document.querySelector('.lien_js_open');
var description_hidden = document.querySelector('.js_masquer');

togglelien.onclick = function(){
description_hidden.classList.toggle('js_open');
togglelien.classList.toggle('lien_js_close');
}

