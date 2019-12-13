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

// chat
$('#send-btn').click(function() {
var usernameInput = $('#userNameInput').val()
var mesageInput = $('#messageInput').val()
var messageTime = new Date().toString().slice(0, 21).substring(3)
var newP = $('<p><strong>' + usernameInput + '</strong>' + ' ' + '<style="color:grey">' + messageTime + '</style>' + '</p>' + '<p>' + mesageInput + '</p>' + '<hr>') 

$('#wrapper').append(newP)
$('#userNameInput').val('')
$('#messageInput').val('')

})

// register validator

$('#register-btn').click(function(e) {
e.preventDefault()

var usr = $('#username').val()

if (usr == '') {  
  var textValid = 'Your username is not valid, '
  } else {
    var textValid = 'Your username is valid, '
}

if($('#password1').val() == $('#password2').val()) {
  textValid = textValid + " both password entries matches, "
} else {
  textValid = textValid + " but password entries doesn't match, "
}
  
if($('#firstName').val() == '') {  
  var textValid = textValid +' name is not valid, '
  } else {
    var textValid = textValid +' name is valid, '
}

if($('#lastName').val == '') {  
  var textValid = textValid +' lastname is not valid, '
  } else {
    var textValid = textValid +' lastname is valid, '
}

if($('#countrySelect').val == 'Please choose*') {  
  var textValid = textValid +' oooo - you are from the best country, '
  } else {
    var textValid = textValid +' you forgot to choose your current country, '
}

$('#text-validation').append(textValid) 
})