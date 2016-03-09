var $body = $('body');
var $headerB = $('<h2>');
var $ulB = $('<ul>');
var $headerA = $('<h2>');
var $ulA = $('<ul>');
var $ul = $('ul');
var $li = $('ul li');

$body.append($headerB);
$headerB.html('Below Ground Veggies');
$body.append($ulB);
$body.append($headerA);
$headerA.html('Above Ground Veggies');
$body.append($ulA);

$li.each(function () {
  if ($(this).hasClass('below')){
    $ulB.append($(this));
  }else{
    $ulA.append($(this));
  }
});
