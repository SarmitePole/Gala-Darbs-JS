// articles.html
$('.small-image').hover(function() { /* atrod bildi, pievieno funkciju, ka uz hover notiks kaut kas */

    var currentImgSrc = $(this).attr('src'); /* uzzinam kāda ir src vērtība tai bildei uz kuras ir pašlaik hover */


    $('#main-image').attr('src', currentImgSrc); /* atrodam lielo bildi, no viņas atribūtiem izvēlamies SRC un pasakam, ka tas būs kaut kāds cits */


})

// AboutUs
$(function() {
    $("#tabs").tabs();
});

$(function() {
    var tabs = $("#tabs").tabs();
    tabs.find(".ui-tabs-nav").sortable({
      axis: "x",
      stop: function() {
        tabs.tabs("refresh");
      }
    });
});

// Register
// validation form on page Register from getBootstrap.com
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// chat
$('#some-input2').keyup(function(e) {
  var currentText = $(this).val()
  $('#some-heading2').html(currentText)

  if(event.keyCode == 13) {

      var newP = $('<p>')
      newP.html(currentText)
      $('#wrapper2').append(newP)
      $(this).val('')
      $('#some-heading2').html('')
      
  }
   
     
})

