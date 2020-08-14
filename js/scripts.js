$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    const language = parseInt($("#interests").val());
    const name = $("input#name").val();
  
    if (language === 1) {
      $("#css").show();
    } else if ( language === 2) {
      $("#swift").show();
    } else {
      $("#ruby").show();
    };
  
  });
});