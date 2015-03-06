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

  $(document).on('click', '.all_users', function(event){
    event.preventDefault();
    $.get(getAjax(event).url, function(response){
      $.map(response, function(user){
        var user = new User(user)
        $('.users').append(htmlUser(user.name, user.description));
      })
    })
  })

  $(document).on('click', '.private', function(event){
    event.preventDefault();
    $.map(getPrivateMembers,
      function(member){
        console.log(member.name);
        console.log(member)
        return false;
      });
  })

  $(document).on('click', '.public', function(event){
    event.preventDefault();
    $.map(getPublicMembers,
      function(member){
        console.log(member.name);
        console.log(member)
        return true;
      });
  })

})