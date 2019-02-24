//Form validation to ensure all answers are given
if ($('input[type=radio]:checked').length <= 0) {
    alert("You MUST answer all questions");
}

//Get radio button values from HTML
$("#results").on("click", function() {
  var totalMarks = 0;
  $("input[type=radio]:checked").each(function() {
    totalMarks += parseInt($(this).val());
  });
  $('#results').val(totalMarks);
  console.log(totalMarks);
});


//Page button events

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
