var vosgestop = document.getElementById("vosges").offsetTop; 
var main = document.getElementById("main").offsetHeight;
var header = document.getElementById("header").offsetHeight;
var listessocialmedia = document.getElementById("listessocialmedia").offsetHeight;
var listesliens = document.getElementById("listesliens").offsetHeight;

var hauteurtot = vosgestop + main + header + listessocialmedia + listesliens;

var main_other = document.getElementById("main_other").offsetHeight;

var hauteurtotfin = main + header + listessocialmedia + listesliens + main_other;

/* document.getElementById("menu_itineraire").className = "open"; */


function fixDiv() 
{
var x = document.body.scrollTop || document.documentElement.scrollTop; 
  if (x > hauteurtot && x < hauteurtotfin) 
  {
    document.getElementById("menu_itineraire").className = "open";
  }
  else
  {
    document.getElementById("menu_itineraire").className = "close";
  }
}

window.onscroll = function() {fixDiv()};

