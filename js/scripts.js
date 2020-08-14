$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    let language = parseInt($("#interests").val());
    let nameInput = $("input#name").val();
  
    if (language === 1) {
      $("#css").show();
      $("#swift").hide();
      $("#ruby").hide();
    } else if ( language === 2) {
      $("#swift").show();
      $("#css").hide();
      $("#ruby").hide();
    } else {
      $("#ruby").show();
      $("#css").hide();
      $("#swift").hide();
    };
    $(".name").text(nameInput);

  });
});