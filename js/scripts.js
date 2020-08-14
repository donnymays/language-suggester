$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    const language = parseInt($("#interests").val());
    const name = $("input#name").val();
  });
});