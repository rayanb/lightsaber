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