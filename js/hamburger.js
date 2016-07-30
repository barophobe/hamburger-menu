
$(document).ready(function(){
$("button").click(function(){
    $(".layover").toggle();
});


 $('ul.layover-content').each(function(){
    
    $parent = $(this).parent();
    
    $parent.width( $(this).width() );
    
  });
});
$(function(){
  $(".layover-content a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});
var headerHeight = 50;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#hed').removeClass('specHd');
    $('#hed').addClass('noSpecHd');
} else {
    $('#hed').removeClass('noSpecHd');
    $('#hed').addClass('specHd');
}
});  


(function() {

"use strict";

var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
};

function toggleHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    (this.classList.contains("is-active") === false) ? this.classList.add("is-active") : this.classList.remove("is-active");
  });
}

})();