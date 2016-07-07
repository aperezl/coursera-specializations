$(function() {
  var wordCounter;
  var titleChanged = 'This is a new title';
  $('#change_title').click(function(e) {
    console.log('Click', $('#title').html());
    startChangeTitle();
  });

  $('#change_style').click(function(e) {
    e.preventDefault();
    if($('.jumbotron').hasClass('cover')) {
      $('.jumbotron').removeClass('cover');
    } else {
      $('.jumbotron').addClass('cover');
    }
  });

  var startChangeTitle = function() {
    wordCounter = 0;
    var myInterval = setInterval(function() {
      if(wordCounter<titleChanged.length) {
        wordCounter++;
        $('#title').html(titleChanged.substring(0, wordCounter) + '_');
        console.log('ok');
      } else {
        clearInterval(myInterval);
        $('#title').html(titleChanged);
        console.log('break interval');
      }
    }, 200);
  }
});
