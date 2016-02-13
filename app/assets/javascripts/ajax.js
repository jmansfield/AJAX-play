// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('.confirmation').on('click', 'button', function(event) {
    //Find the comments ul and fade it in
    $.get('comments', function(response){
      $('.comments').html(response).slideDown();
    });
  });
});
