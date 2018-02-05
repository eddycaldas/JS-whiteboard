
$(document).ready(function(){
  $('#button').click(function(e){

    var name = $('#name').val();
    var email = $('#email').val();
    var comment = $('#comment').val();
    
    $('#postIt').text(
      'From: ' + name  + ' ' + 'email: ' + email + ' ' + 'Comment: ' + comment)
    
    e.preventDefault();
  })
});