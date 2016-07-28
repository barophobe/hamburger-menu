/* Open when someone clicks on the span element */
// function openNav() {
  
// }

//  Close when someone clicks on the "x" symbol inside the overlay 
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }

// $(function(){
// 	var $btnOps = $("#ops");
// 	var $dim = $("#myNav");
//     // $dim.style.width = "20%";
//     // $dim.style.height = "20%";
//     $btnOps.click(function(){  
    
//         $dim.toggle();
//     });
// });
$(document).ready(function(){
$("button").click(function(){
    $(".overlay").toggle();
});
});


 // var $hamburger = $(".hamburger");
 //  $hamburger.on("click", function(e) {
 //    $hamburger.toggleClass("is-active");
 //    // Do something else, like open/close menu
 //    $(".overlay").toggle();
 //  });


    (function() {

    "use strict";

    var toggles = document.querySelectorAll(".hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  })();