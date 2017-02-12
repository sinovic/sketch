
$(document).ready(function () {
  for(var x = 0; x < 35; x++) {
    for(var y = 0; y < 35; y++) {
      var unit = $('<div class="square"></div>');
      unit.appendTo('.container');
    }
  }

  $( '.square' ).hover(function() {
    $(this).css('background-color', '#000');
  });

  $( 'button' ).click(function() {
    $('.square').css('background-color', 'crimson');
  });

});


