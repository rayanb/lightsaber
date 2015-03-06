var User = function(user){
  this.name=user.name;
  this.description = user.description;
};

var getAjax = function(event){
  var $target = $(event.target);
  var url = $target.attr('href')
  return{
    url: url
  }
};

var getPrivateMembers = function(){
  var members =[]
  $.get('/private_users', function(data){
    $.map(data, function(mem){
      members.push(mem)
    });
  });
  return members;
}();

var getPublicMembers = function(){
  var members=[];
  $.get('/public_users', function(data){
    $.map(data, function(mem){
      members.push(mem)
    })
  })
  return members;

}();