// $('#landing-page').carousel({
//      interval: 3000;
//    })
//  });

$("#questions-2").on("click", function() {
  event.preventDefault();
  $("#landing-page").hide();
  $("#set-1").hide();
  $("#questions-2").hide();
  $("#set-2").show();
});
