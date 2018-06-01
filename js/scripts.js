// BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function() {

  var motivation = confirm("If you are interested in the full time program, would you feel comfortable spending 40 hours a week Monday through Friday? Click OK for yes or Cancel for no.");

    if (motivation) {
      $('#motivated').show();
    } else {
        $('#not-motivated').show();
    }

$("form#choice").click(function(event) {
  console.log("reached");
    event.preventDefault();
    console.log("reached");
  var cssreact = $("select#csschoice").val();
  var rubyrails = $("select#rubychoice").val();
  var cnet = $("select#cnetchoice").val();

    if (cssreact === 'Yes')
      {
        $('#CSS-box').show();
        $('#default').hide();
      }
      else if (rubyrails === 'Yes')
      {
        $('#Ruby-box').show();
        $('#default').hide();
      }
      else  if (cnet === 'Yes')
      {
        $('#CNET-box').show();
        $('#default').hide();
      }
      else  if (cssreact === 'No' && rubyrails === 'No' && cnet === 'No')
      {
        $('#default').show();
      }
        console.log("reached");
  });
});
