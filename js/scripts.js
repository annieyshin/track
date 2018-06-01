// BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function() {
  // event.preventDefault();
  // $("#nameinput").submit(function() {
  //   $(".name1").text(varname);
  // });
  var motivation = confirm("If you are interested in the full time program, would you feel comfortable spending 40 hours a week Monday through Friday? Click OK for yes or Cancel for no.");

    if (motivation) {
      $('#motivated').show();
    } else {
        $('#not-motivated').show();
    }





  });

  // $("form#sexual").submit(function() {
  //   var sex = $("select#sexualpick").val();
  //
  //     if (sex === 'gay') {
  //       $('#gaybox').show();
  //     } else {
  //         $('#straightbox').show();
  //     }
// $(document).ready(function() {
  // $("#submit").click(function(event) {
  //   event.preventDefault();
//     var varfoods = parseInt($("#foods").val());
//     var varmusic = parseInt($("#music").val());
//     var varcolor = parseInt($("#color").val());
//     var varanimal = parseInt($("#animal").val());
//     var varmovie = parseInt($("#movie").val());
//     var varbook = parseInt($("#book").val());
//     var result = varfoods + varmusic + varcolor + varanimal + varmovie + varbook;
//     console.log(varfoods);
//     $("#output").text(result);
//     });
