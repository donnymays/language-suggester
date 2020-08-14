$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    let language = parseInt($("#interests").val());
    let name = $("input#name").val();
  
    if (language === 1) {
      $("#css").show();
    } else if ( language === 2) {
      $("#swift").show();
    } else {
      $("#ruby").show();
    };
  
  });
});