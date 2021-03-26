// Business Logic


$(document).ready(function () {


  $("form").submit(function (event) {

    alert("func running")

    // $("input[name$='tv']").click(function () {
    //   const test = $(this).val();
    //   $("#" + test).show();
    // });
    // alert(click ran)
    

    const mash = $("input:radio[name=tv]:checked").val();
    const three = $("input:radio[name=tv]:checked").val();
    const taxi = $("input:radio[name=tv]:checked").val();

    const bike = $("input:radio[name=hobby]:checked").val();
    const water = $("input:radio[name=hobby]:checked").val();
    const sky = $("input:radio[name=hobby]:checked").val();

    const symphony = $("input:radio[name=music]:checked").val();
    const rock = $("input:radio[name=music]:checked").val();
    const country = $("input:radio[name=music]:checked").val();

    const sushi = $("input:radio[name=food]:checked").val();
    const chicken = $("input:radio[name=food]:checked").val();
    const salad = $("input:radio[name=food]:checked").val();

    const morning = $("input:radio[name=day]:checked").val();
    const evening = $("input:radio[name=day]:checked").val();
    const night = $("input:radio[name=day]:checked").val();


  
  



    alert("const is executed")

    if (bike && mash && classic && sushi && morning) {
      $("#javaScript").show();
      $(".answer").hide();
    } else if (water && three && rock && chicken && evening) {
      $("#cSharp").show();
      // $(".answer").hide();
    } else if (sky && taxi && country && sushi && morning) {
      $("#javaScript").show();
      // $(".answer").hide();
    } else if (water && three && rock && chicken && evening) {
      $("#cSharp").show();
      // $(".answer").hide();
    } else {
      $("#cSharp").show();
      // $(".answer").hide();
    }
    alert("else if have run")

    event.preventDefault();

  });
});