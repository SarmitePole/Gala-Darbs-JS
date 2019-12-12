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
$('#send-btn').click(function() {
  var usernameInput = $('#userNameInput').val()
  var mesageInput = $('#messageInput').val()
  // var messageTime = new Date(year, month, date, hours, minutes, seconds, ms)
  var messageTime = new Date()
  var newP = $('<p>' + usernameInput + ' ' + messageTime + '</p>' + '<p>' + mesageInput + '</p>' + '<hr>') 

  console.log(messageTime)

  $('#wrapper').append(newP)
  $('#userNameInput').val('')
  $('#messageInput').val('')

})