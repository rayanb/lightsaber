// Javascript Goes Here~
//
$(document).on('ready', function() {
  $('.lightsaber').css("display", "none");
  $('.amaze').on('click', function(event){
    event.preventDefault();
    $.get('/lightsaber', function(response){
      $('.lightsaber').append(response);
      $('.lightsaber').toggle("slow");
      var text = $('.amaze').text();
      $('.amaze').text(text == "amazed" ? "deceived" : "amazed");
    })
  })
  $('.header').on('submit', function(event){
    event.preventDefault();
    var $target = $(event.target);
    $.ajax({
      url:'/header',
      type: 'post',
      data: $target.serialize(),
      success: function(response){
        $('.message').text(response.message+"'s")
      }
    })
  })
})