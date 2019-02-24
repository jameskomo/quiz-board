//Get all radio button values on clicking view Results
$("#results").on("click", function() {
  var marks = [];
  $(".radio-btn:checked").each(function() {
    alert("Radio: " + $(this).val());
    marks.push($(this).val());
    console.log(marks);
  });
});

$("#learn-more").on("click", function() {
  event.preventDefault();
  $("#about").hide()
  $("#landing-page").show();
});

$("#take-test").on("click", function() {
  event.preventDefault();
  $("#landing-page").hide();
  $("#set-1").show();
});

$("#questions-2").on("click", function() {
  event.preventDefault();
  $("#set-1").hide();
  $("#set-2").show();
});

//
// $("#results").on("click",function closeWin() {
//   myWindow.close();   // Closes the new window
// }
