$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    let language = parseInt($("#interests").val());
    let nameInput = $("input#name").val();
    let mobileInput = $("input:radio[name=mobile]:checked").val()
  
    if (nameInput != "") {
      if (language === 1) {
        $("#css").show();
        $("#swift").hide();
        $("#ruby").hide();
        $("#c-sharp").hide();
      } else if ( language === 2 && mobileInput === "ios") {
        $("#swift").show();
        $("#css").hide();
        $("#ruby").hide();
        $("#c-sharp").hide();
      } else if ( language === 2 && mobileInput === "android") {
        $("#swift").hide();
        $("#css").hide();
        $("#ruby").hide();
        $("#c-sharp").show();
      }else {
        $("#ruby").show();
        $("#css").hide();
        $("#swift").hide();
        $("#c-sharp").hide();
      };
    } else {
      alert("Please enter you name");
    };
    
    //   $(".name").text(nameInput);
    // if (nameInput != "") {
    //   $("answer").show();
    
   

  });
});