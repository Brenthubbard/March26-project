$(document).ready(function () {
  $("form#form-one").submit(function (event) {
    event.preventDefault();

    $(".answer").hide();

    const tv = $("input:radio[name=tv]:checked").val();
    const hobby = $("input:radio[name=hobby]:checked").val();
    const music = $("input:radio[name=music]:checked").val();
    const food = $("input:radio[name=food]:checked").val();
    const day = $("input:radio[name=day]:checked").val();

    if (hobby === "bike" && tv === "mash" && music === "rock" && food === "chicken" && day === "morning") {
      $("#python").show();
    } else if (tv === "three" && hobby === "water" && music === "country" && food === "salad" && day === "evening") {
      $("#javaScript").show();
    } else if (tv === "taxi" && hobby === "sky" && music === "symphony" && food === "sushi" && day === "night") {
      $("#javaScript").show();
    } else if (tv === "mash" && music === "symphony" && hobby === "bike" && food === "sushi" && day === "evening") {
      $("#python")
    } else if (tv === "three" && hobby === "water" && music === "country" && food === "chicken" && day === "morning") {
      $("#javaScript").show();
    } else if (tv === "taxi" && hobby === "bike" && music === "rock" && food === "salad" && day === "night") {
      $("#python").show();
    } else if (tv === "mash" && hobby === "bike" && music === "symphony" && food === "sushi" && day === "morning") {
      $("#python").show();
    } else {
      $("#cSharp").show();
    }
  });
});