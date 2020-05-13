var togglelien = document.querySelector('.show_description');
var description_hidden = document.querySelector('.description_hidden');

togglelien.onclick = function(){
description_hidden.classList.toggle('description_open');
togglelien.classList.toggle('show_description_none');
}



var couchagelien = document.getElementById("couchage_menu");
var vetementslien = document.getElementById("vetements_menu");
var cuisinelien = document.getElementById("cuisine_menu");
var studiolien = document.getElementById("studio_menu");
var autreslien = document.getElementById("autres_menu");


couchagelien.onclick = function(){


document.getElementById("couchage").className = "open";

document.getElementById("vetements").className = "close";
document.getElementById("cuisine").className = "close";
document.getElementById("studio").className = "close";
document.getElementById("autres").className = "close";

document.getElementById("couchage_menu").className = "itemmenu_open";

document.getElementById("vetements_menu").className = "itemmenu_close";
document.getElementById("cuisine_menu").className = "itemmenu_close";
document.getElementById("studio_menu").className = "itemmenu_close";
document.getElementById("autres_menu").className = "itemmenu_close";
}


vetementslien.onclick = function(){

document.getElementById("couchage").className = "close";
document.getElementById("vetements").className = "open";
document.getElementById("cuisine").className = "close";
document.getElementById("studio").className = "close";
document.getElementById("autres").className = "close";

document.getElementById("couchage_menu").className = "itemmenu_close";
document.getElementById("vetements_menu").className = "itemmenu_open";
document.getElementById("cuisine_menu").className = "itemmenu_close";
document.getElementById("studio_menu").className = "itemmenu_close";
document.getElementById("autres_menu").className = "itemmenu_close";
}

cuisinelien.onclick = function(){

document.getElementById("couchage").className = "close";
document.getElementById("vetements").className = "close";
document.getElementById("cuisine").className = "open";
document.getElementById("studio").className = "close";
document.getElementById("autres").className = "close";

document.getElementById("couchage_menu").className = "itemmenu_close";
document.getElementById("vetements_menu").className = "itemmenu_close";
document.getElementById("cuisine_menu").className = "itemmenu_open";
document.getElementById("studio_menu").className = "itemmenu_close";
document.getElementById("autres_menu").className = "itemmenu_close";
}

studiolien.onclick = function(){

document.getElementById("couchage").className = "close";
document.getElementById("vetements").className = "close";
document.getElementById("cuisine").className = "close";
document.getElementById("studio").className = "open";
document.getElementById("autres").className = "close";

document.getElementById("couchage_menu").className = "itemmenu_close";
document.getElementById("vetements_menu").className = "itemmenu_close";
document.getElementById("cuisine_menu").className = "itemmenu_close";
document.getElementById("studio_menu").className = "itemmenu_open";
document.getElementById("autres_menu").className = "itemmenu_close";
}

autreslien.onclick = function(){

document.getElementById("couchage").className = "close";
document.getElementById("vetements").className = "close";
document.getElementById("cuisine").className = "close";
document.getElementById("studio").className = "close";
document.getElementById("autres").className = "open";

document.getElementById("couchage_menu").className = "itemmenu_close";
document.getElementById("vetements_menu").className = "itemmenu_close";
document.getElementById("cuisine_menu").className = "itemmenu_close";
document.getElementById("studio_menu").className = "itemmenu_close";
document.getElementById("autres_menu").className = "itemmenu_open";
}