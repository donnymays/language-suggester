$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    
    let language = parseInt($("#interests").val());
    let nameInput = $("input#name").val();
    let mobileInput = $("input:radio[name=mobile]:checked").val()

    $(".name").text(nameInput);
  
    if (nameInput != "") {
      if (language === 1) {
        $("#css").fadeIn(1500);
        $("#swift").hide();
        $("#ruby").hide();
        $("#c-sharp").hide();
      } else if ( language === 2 && mobileInput === "ios") {
        $("#swift").fadeIn(1500);
        $("#css").hide();
        $("#ruby").hide();
        $("#c-sharp").hide();
      } else if ( language === 2 && mobileInput === "android") {
        $("#swift").hide();
        $("#css").hide();
        $("#ruby").hide();
        $("#c-sharp").fadeIn(1500);
      }else {
        $("#ruby").fadeIn(1500);
        $("#css").hide();
        $("#swift").hide();
        $("#c-sharp").hide();
      };
    } else {
      alert("Please enter you name");
    };
  });
});