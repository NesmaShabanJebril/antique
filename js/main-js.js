
$(function() {
        "use strict";
   $(window).on("scroll",function(){
     var sc = $(window).scrollTop();
       if(sc > 150){
           $("nav").addClass("bg-b");
       } else {
          $("nav").removeClass("bg-b");
        }
   });
});

$(".button").on("click", function(ev) {
  var currentQty = $('input[name="quantity"]').val();
  var qtyDirection = $(this).data("direction");
  var newQty = 0;
  
  if (qtyDirection == "1") {
    newQty = parseInt(currentQty) + 1;
  }
  else if (qtyDirection == "-1") {
    newQty = parseInt(currentQty) - 1;
  }

  // make decrement disabled at 1
  if (newQty == 1) {
    $(".decrement-quantity").attr("disabled", "disabled");
  }
  
  // remove disabled attribute on subtract
  if (newQty > 1) {
    $(".decrement-quantity").removeAttr("disabled");
  }
  
  if (newQty > 0) {
    newQty = newQty.toString();
    $('input[name="quantity"]').val(newQty);
  }
  else {
    $('input[name="quantity"]').val("1");
  }
});


