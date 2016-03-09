//make vars

//loop ul

//if statement.

//go



var $body = $('body');
var $headerB = $('<h2>');
var $ulB = $('<ul>');
var $ul = $('ul');
var $li = $('ul li');

$body.append($headerB);
$headerB.html('Below Ground Veggies');
$body.append($ulB);

$li.each(function () {
  if ($(this).hasClass('below')){
    $ulB.append($(this));
  }else{
    alert('nah');
  }
});
