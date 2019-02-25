//Form validation to ensure all answers are given
if ($('input[type=radio]:checked').length <= 0) {
  alert("You MUST answer all questions");
}

//Get radio button values from HTML
$("#results").on("click", function() {
  $("#set-2").hide()
  var totalMarks = 0;
  $("input[type=radio]:checked").each(function() {
    totalMarks += parseInt($(this).val());
  });
  $('#results').val(totalMarks);
  console.log(totalMarks);
  var finalMarks = (totalMarks / 75) * 100;
  var roundedMarks = finalMarks.toFixed(0);
  if (roundedMarks > 80) {
    alert("Your score is " + roundedMarks + " %.Your overall grade is EXCELLENT ");
    $("#about").show();
  } else if (roundedMarks <= 80 && roundedMarks >= 50) {
    alert("Your score is " + roundedMarks + " %.Your overall grade is FAIR ");
    $("#about").show();
  } else if (roundedMarks < 50) {
    alert("Your score is " + roundedMarks + " %.Your need to RETAKE this exam ");
    $("#about").show();
  };
});
//Conditional Loop for finalMarks


//Navigation Bar Manipulation
$("#nav-home").on("click", function() {
  event.preventDefault();
  $("#about").show()
  $("#set-1").hide()
  $("#set-2").hide()
  $("#landing-page").hide();
});

$("#nav-test").on("click", function() {
  event.preventDefault();
  $("#about").hide();
  $("#set-2").hide();
  $("#set-1").show();
});
$("#nav-about").on("click", function() {
  event.preventDefault();
  $("#about").hide();
  $("#set-2").hide();
  $("#set-1").hide();
  $("#landing-page").show();
});

//Page button events


$("#learn-more").on("click", function() {
  event.preventDefault();
  $("#about").hide();
  $("#landing-page").fadeIn(3000);
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
